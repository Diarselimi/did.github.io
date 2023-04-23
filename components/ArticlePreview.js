import formatDate from '@/lib/utils/formatDate'

function ArticlePreview({ slug, date, title, summary, tags }) {
  return (
    <a
      key={slug}
      className="font-size-1 group block rounded-xl p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
      href={`/blog/${slug}`}
    >
      <p className="mb-3 mt-3 border-l-2 border-gray-200 p-0 pl-5 text-sm text-gray-500">
        <time dateTime={date}>{formatDate(date)}</time>
      </p>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-500">{summary}</p>
      <p className="mt-2 font-bold text-purple-500 transition group-hover:text-purple-600">
        Read more →
      </p>
    </a>
  )
}

export default ArticlePreview
