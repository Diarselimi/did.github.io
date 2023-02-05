import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, count }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 rounded-md bg-sky-500 p-5 text-sm font-medium uppercase text-white hover:bg-sky-500">
        {text.split(' ').join('-')} {count}
      </a>
    </Link>
  )
}

export default Tag
