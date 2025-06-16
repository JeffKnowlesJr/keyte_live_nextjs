// Service Worker for Keyte Group Website Performance Optimization
// Version 1.0.0

const CACHE_NAME = 'keyte-group-v1'
const STATIC_CACHE_NAME = 'keyte-group-static-v1'
const DYNAMIC_CACHE_NAME = 'keyte-group-dynamic-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/critical.css',
  '/css/app.css',
  '/css/accessibility.css',
  '/css/ccm.base.css',
  '/js/jquery.foundation.navigation.js',
  '/js/jquery.foundation.accordion.js',
  '/js/jquery.foundation.buttons.js',
  '/js/jquery.offcanvas.js',
  '/js/modernizr.foundation.js',
  '/js/jquery.nivo.slider.pack.js',
  '/images/ajax-loader.gif',
  '/images/Keyte_Group_logo_large.png',
  '/keyte_small_dgq_icon.ico'
]

// Images to cache (slider images)
const IMAGE_ASSETS = [
  '/images/home-page-rotating-graphic-1.jpg',
  '/images/home-page-rotating-graphic-2.jpg',
  '/images/home-page-rotating-graphic-3.jpg',
  '/images/home-page-rotating-graphic-4.jpg',
  '/images/home-page-rotating-graphic-5.jpg',
  '/images/home-page-rotating-graphic-6.jpg',
  '/images/headerdots.png',
  '/images/contact-icons.png'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')

  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching static assets...')
        return cache.addAll(STATIC_ASSETS)
      }),
      // Cache images separately for better control
      caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
        console.log('Service Worker: Pre-caching critical images...')
        return cache.addAll(IMAGE_ASSETS.slice(0, 2)) // Only first 2 images initially
      })
    ]).then(() => {
      console.log('Service Worker: Install complete')
      self.skipWaiting()
    })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE_NAME &&
              cacheName !== DYNAMIC_CACHE_NAME
            ) {
              console.log('Service Worker: Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activation complete')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve cached content when available
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests (except for jQuery CDN)
  if (
    url.origin !== location.origin &&
    !url.hostname.includes('googleapis.com') &&
    !url.hostname.includes('googletagmanager.com')
  ) {
    return
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Serve from cache
        return cachedResponse
      }

      // Not in cache, fetch from network
      return fetch(request)
        .then((response) => {
          // Don't cache non-successful responses
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          // Determine which cache to use
          let cacheName = DYNAMIC_CACHE_NAME

          if (STATIC_ASSETS.some((asset) => request.url.includes(asset))) {
            cacheName = STATIC_CACHE_NAME
          }

          // Cache the response
          caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // Network failed, try to serve a fallback
          if (request.destination === 'document') {
            return caches.match('/')
          }

          if (request.destination === 'image') {
            return caches.match('/images/ajax-loader.gif')
          }

          // For other resources, let the request fail
          return new Response('Offline', { status: 503 })
        })
    })
  )
})

// Background sync for non-critical resources
self.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_REMAINING_IMAGES') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching remaining images...')
        return cache.addAll(IMAGE_ASSETS.slice(2)) // Cache remaining images
      })
    )
  }
})

// Periodic cleanup of old cache entries
self.addEventListener('message', (event) => {
  if (event.data.type === 'CLEANUP_CACHE') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
        return cache.keys().then((requests) => {
          // Remove old entries (older than 7 days)
          const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
          return Promise.all(
            requests.map((request) => {
              return cache.match(request).then((response) => {
                if (response) {
                  const dateHeader = response.headers.get('date')
                  if (
                    dateHeader &&
                    new Date(dateHeader).getTime() < oneWeekAgo
                  ) {
                    return cache.delete(request)
                  }
                }
              })
            })
          )
        })
      })
    )
  }
})
