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

const svgs = {
  linkedin: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-6 w-6"
    >
      <title>Linkedin</title>
      <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"></path>
    </svg>
  ),
  twitter: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-6 w-6"
    >
      <title>Twitter</title>
      <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"></path>
    </svg>
  ),
  facebook: (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-6 w-6"
    >
      <title>Facebook</title>
      <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
    </svg>
  ),
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-blue-600 bg-blue-600 p-3 text-white transition duration-200 hover:border-blue-700 hover:bg-blue-700"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {svgs[kind]}
    </a>
  )
}

export default SocialIcon
