import HeaderSubpage from './HeaderSubpage'
import FooterSubpage from './FooterSubpage'
import MobileMenu from './MobileMenu'

interface SubpageLayoutProps {
  children: React.ReactNode
}

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <>
      {/* Mobile Navigation - at body level for off-canvas functionality */}
      <MobileMenu />
      
      <HeaderSubpage />
      <main>{children}</main>
      <FooterSubpage />
    </>
  )
}
