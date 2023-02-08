import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    youtube: Youtube,
    linkedin: Linkedin,
    twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-primary-600 p-3 text-black dark:text-white transition duration-200 hover:border-primary-700 hover:text-white hover:bg-primary-700"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {SocialSvg}
    </a>
  )
}

export default SocialIcon
