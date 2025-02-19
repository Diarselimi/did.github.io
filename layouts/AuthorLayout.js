import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />

      <div className="mx-auto flex max-w-screen-xl flex-row space-x-10 px-3 py-12">
        <div className="w-2/3 shrink pr-8">
          <div className="prose dark:prose-dark xl:col-span-2">{children}</div>
        </div>
        <div className="w-1/3">
          <div className="relative mb-8 h-80 w-full rotate-2 rounded-xl shadow-lg">
            <Image
              src={avatar}
              alt="avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="items-left flex flex-col">
            <SocialIcon
              kind="linkedin"
              href={siteMetadata.linkedin}
              size="5"
              text="My Linkedin Profile"
            />
            <SocialIcon
              kind="twitter"
              href={siteMetadata.twitter}
              size="5"
              text="My Twitter profile"
            />
            <SocialIcon
              kind="github"
              href={siteMetadata.github}
              size="5"
              text="My Github profile"
            />
            <SocialIcon
              kind="youtube"
              href={siteMetadata.youtube}
              size="5"
              text="My Youtube Channel"
            />

            <div className="my-8 border-b"></div>
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size="5"
              text="Email me"
            />
          </div>
        </div>
      </div>
    </>
  )
}
