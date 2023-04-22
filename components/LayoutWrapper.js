import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Navigation from './Navigation'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">{children}</main>
        <hr />
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
