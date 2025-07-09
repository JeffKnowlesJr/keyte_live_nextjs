import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Short Stops: Building For The Post Pandemic Era - Keyte Group',
  description:
    "Ten-minute lean transformation insights by Beau Keyte to boost your organization's strategic advantage and get you on a faster track in adapting to the new reality of the post pandemic era.",
  keywords:
    'Short Stops, post-pandemic era, organizational insights, problem-solving, leadership, hidden capacity, social side of change, Beau Keyte, industry support, teaching, writing, critical thinking, coaching',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Short Stops: Building For The Post Pandemic Era - Keyte Group',
    description:
      "Ten-minute lean transformation insights by Beau Keyte to boost your organization's strategic advantage and get you on a faster track in adapting to the new reality of the post pandemic era.",
    url: 'https://www.keytegroup.com/how-we-think/short-stops/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/10_minute_short_stops.png',
        width: 800,
        height: 600,
        alt: 'Short Stops: Building for the Post Pandemic Era'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Short Stops: Building For The Post Pandemic Era - Keyte Group',
    description:
      "Ten-minute lean transformation insights to boost your organization's strategic advantage.",
    images: ['https://www.keytegroup.com/images/10_minute_short_stops.png']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/how-we-think/short-stops/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="short-stops-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Short Stops: Building for the Post Pandemic Era',
            description:
              "Ten-minute lean transformation insights by Beau Keyte to boost your organization's strategic advantage and get you on a faster track in adapting to the new reality of the post pandemic era. Part of Beau Keyte's professional insights and industry support through teaching and writing.",
            author: {
              '@type': 'Person',
              name: 'Beau Keyte'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Keyte Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.keytegroup.com/images/Keyte_Group_logo_large.png'
              }
            },
            url: 'https://www.keytegroup.com/how-we-think/short-stops/',
            mainEntityOfPage:
              'https://www.keytegroup.com/how-we-think/short-stops/'
          })
        }}
      />
      <div className="foundation-row">
        <div id="headerdots">
          <img src="/images/headerdots.png" alt="" role="presentation" />
        </div>
        <div className="eleven columns centered">
          <div id="maincontent" className="content">
            <div className="foundation-row">
              <div className="three columns hide-for-small">
                <ul className="side-nav">
                  <li className="active">
                    <a href="/how-we-think/">How We Think</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a
                      href="/how-we-think/perfecting-patient-journeys-book"
                      target="_self"
                      className=""
                    >
                      Perfecting Patient Journeys Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-we-think/complete-lean-enterprise-book"
                      target="_self"
                      className=""
                    >
                      Complete Lean Enterprise Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-we-think/articles-and-thoughts"
                      target="_self"
                      className=""
                    >
                      Articles and thoughts
                    </a>
                    <ul>
                      <li>
                        <a
                          href="/how-we-think/articles-and-thoughts/strategic-stockpile"
                          target="_self"
                          className=""
                        >
                          Strategic National Stockpile
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/how-we-think/short-stops" target="_self" className="">
                      Short Stops
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-we-think/remarketing-continuous-improvement"
                      target="_self"
                      className=""
                    >
                      Remarketing Continuous Improvement
                    </a>
                  </li>
                </ul>
                <img
                  className="ccm-image-block"
                  alt="Treasure Chest"
                  src="/images/treasure-chest.jpg"
                  width="210"
                  height="240"
                />
                <p>
                  <em>
                    Insights to boost your organization's strategic advantage.
                  </em>
                </p>
              </div>
              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/how-we-think">How We Think</a>
                  </li>
                  <li>
                    <a href="#">Short Stops</a>
                  </li>
                </ul>
                <h1>Short Stops: Building for the Post Pandemic Era</h1>
                <h4>
                  Ten-minute insights to boost your organization's strategic
                  advantage and get you on a faster track in adapting to the new
                  reality
                </h4>

                <p>
                  Short Stop #1:{' '}
                  <strong>
                    The Four Bedrock Questions You Should Be Asking
                  </strong>
                  <br />
                  <a href="#1">Read Description</a> |{' '}
                  <a href="#stop-1">Watch Video</a>
                  <br />
                  Short Stop #2: <strong>Finding Hidden Capacity</strong>
                  <br />
                  <a href="#2">Read Description</a> |{' '}
                  <a href="#stop-2">Watch Video</a>
                  <br />
                  Short Stop #3:{' '}
                  <strong>
                    How Do the Best Leaders Avoid Being Overstretched?
                  </strong>
                  <br />
                  <a href="#3">Read Description</a> |{' '}
                  <a href="#stop-3">Watch Video</a>
                  <br />
                  Short Stop #4:{' '}
                  <strong>Seeing Beyond A Technical Solution</strong>
                  <br />
                  <a href="#4">Read Description</a> |{' '}
                  <a href="#stop-4">Watch Video</a>
                  <br />
                  Short Stop #5: <strong>Scaling Change Quickly</strong>
                  <br />
                  Short Stop #6:{' '}
                  <strong>Integrating Conscious Behavior Changes</strong>
                </p>

                <h2>
                  Short Stop #1: The Four Bedrock Questions You Should Be Asking
                </h2>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/vWrZVBJc5SQ?si=RuPoVnXgX6l0JUKq"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p id="1">
                  Four basic probing questions will help you dig deep and
                  uncover information that will reveal the specific issues
                  underlying an operational difficulty. In practice, they act as
                  guardrails against settling for anecdotal evidence over data
                  in diagnosing complex problems or rushing to solutions that
                  may or may not be on the right track.
                </p>
                <p>
                  This inaugural webinar will introduce these foundational
                  questions, provide examples of how they work, explore common
                  concerns and/or additional questions, and then let you try
                  them back in your own workplace.
                </p>
                <p>
                  If you would like some assistance adapting and applying these
                  insights to your organization, please{' '}
                  <a href="/contact">contact me</a> to arrange an "office hour"
                  with your teams.
                </p>

                <h2>Short Stop #2: Finding Hidden Capacity</h2>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/TUcLH4IzVAs?si=KCisU3IdO9goCa6s"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p id="2">
                  Lean thinking challenges an organization to examine how its
                  resources are currently deployed. Until they are being used
                  optimally, it's unlikely that adding resources is the best way
                  to grow your organization in a sustainable way.
                </p>
                <p>
                  To help quantify things, the metaphor of a bucket can be used.
                  The current "capacity" – how resources are being used in
                  different activities -- can be visualized, and then also how
                  they need to be used to achieve a specific operational goal.
                  This webinar will introduce the capacity bucket, show several
                  quick examples, and then leave you with a straightforward
                  challenge: what do you understand about how you use your
                  capacity today and the resource gaps that challenge your
                  improvement efforts?
                </p>

                <h2>
                  Short Stop #3: How Do the Best Leaders Avoid Being
                  Overstretched?
                </h2>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/146AWtg8wSs?si=Y4jAO083zVierI_x"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p id="3">
                  Most transformative efforts require that top organizational
                  leaders become significantly involved in championing change
                  (with the difficult work of accepting different ways of
                  thinking and acting). When redesigning work for most workers,
                  showing them how to first remove work that no longer makes
                  sense or adds value is important. Leaders should have the same
                  opportunity.
                </p>
                <p>
                  This webinar is designed to start you on a path toward doing
                  the right work, and only the right work, as part of your
                  organizational transformation. It will provide you with a
                  template for assessing your current work in a deliberate
                  manner. It will share a process used to challenge the value of
                  ongoing tasks, with an eye-opening example. Once you've worked
                  through this process for yourself and removed work that no
                  longer has value, you will be free to replace it with work
                  that moves the organization forward.
                </p>
                <p>
                  If you would like some assistance adapting and applying these
                  insights to your organization, please{' '}
                  <a href="/contact">contact me</a> to arrange an "office hour"
                  with your teams.
                </p>

                <h2>Short Stop #4: Seeing Beyond A Technical Solution</h2>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/DTkxvmaJFb0?si=_-DB0zxGNtnrFvNa"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p id="4">
                  When I began my lean thinking journey years ago, my clients
                  were impressed that I could present seemingly brilliant
                  solutions to their problems. And - truth be told - I was too
                  often impressed with myself. It took me years to realize that
                  my solutions were flawed; as a young engineering professional,
                  I hadn't recognized the human limitations of the workplace,
                  hadn't understood how people thought and acted within an
                  existing organizational culture.
                </p>
                <p>
                  This webinar will focus on the social impact of change and
                  enable you to conceptualize a socialization component to
                  process improvement, and a simple tool to figure out who you
                  should be talking to and what you need to talk about as you
                  move your changes forward to better outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
