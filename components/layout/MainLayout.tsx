import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Mobile Navigation - at body level for off-canvas functionality */}
      <MobileMenu />
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
