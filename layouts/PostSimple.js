import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import SocialIcon from '@/components/social-icons'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, slug } = frontMatter
  const discussUrl = (slug) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${siteMetadata.siteUrl}/blog/${slug}`
    )}`
  const shareOnLinkedinUrl = (slug) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      `${siteMetadata.siteUrl}/blog/${slug}`
    )}`
  const shareOnFacebookUrl = (slug) =>
    `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `${siteMetadata.siteUrl}/blog/${slug}`
    )}`

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
        <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex space-x-3 pt-6">
            <SocialIcon href={discussUrl(slug)} kind={'twitter'} rel="nofollow" />
            <SocialIcon href={shareOnLinkedinUrl(slug)} kind={'linkedin'} rel="nofollow" />
            <SocialIcon href={shareOnFacebookUrl(slug)} kind={'facebook'} rel="nofollow" />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
