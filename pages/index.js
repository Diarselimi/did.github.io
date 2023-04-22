import SocialIcon from '@/components/social-icons'
import Hashtag from '@/components/Hashtag'
import formatDate from '@/lib/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <h1 className="mb-8 text-6xl font-bold tracking-tight text-black dark:text-white">
        {siteMetadata.title}
      </h1>
    </>
  )
}
