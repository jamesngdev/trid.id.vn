import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      {/* Hero Header */}
      <SectionContainer fullWidth>
        <header className="relative mb-20 flex min-h-[20vh] items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div>
              <time
                dateTime={date}
                className="mb-6 block text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </div>
            <h1 className="hero-typography mb-8 text-gray-900 dark:text-white">{title}</h1>
            {authorDetails && authorDetails.length > 0 && (
              <div className="flex items-center justify-center space-x-4">
                {authorDetails.map((author) => (
                  <div key={author.name} className="flex items-center space-x-3">
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width="48px"
                        height="48px"
                        alt="avatar"
                        className="h-12 w-12 rounded-full"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {author.name}
                      </div>
                      {author.twitter && (
                        <Link
                          href={author.twitter}
                          className="text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.twitter.replace('https://twitter.com/', '@')}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>
      </SectionContainer>

      <SectionContainer>
        <article>
          <div className="xl:grid xl:grid-cols-4 xl:gap-12">
            {/* Main Content */}
            <div className="xl:col-span-3">
              <div className="prose prose-lg max-w-none dark:prose-dark">{children}</div>

              <div className="hairline-border mt-12 border-t border-gray-200 pt-8 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                <Link
                  href={discussUrl(slug)}
                  rel="nofollow"
                  className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link
                  href={editUrl(fileName)}
                  className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  View on GitHub
                </Link>
              </div>

              <Comments frontMatter={frontMatter} />
            </div>

            {/* Sidebar */}
            <aside className="mt-12 xl:col-span-1 xl:mt-0">
              <div className="sticky top-24 space-y-8">
                {tags && tags.length > 0 && (
                  <div className="glass rounded-2xl p-6">
                    <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}

                {(next || prev) && (
                  <div className="glass space-y-6 rounded-2xl p-6">
                    {prev && (
                      <div>
                        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Previous
                        </h2>
                        <Link
                          href={`/blog/${prev.slug}`}
                          className="block text-sm font-medium text-gray-900 transition-colors duration-200 hover:text-primary-500 dark:text-white dark:hover:text-primary-400"
                        >
                          {prev.title}
                        </Link>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Next
                        </h2>
                        <Link
                          href={`/blog/${next.slug}`}
                          className="block text-sm font-medium text-gray-900 transition-colors duration-200 hover:text-primary-500 dark:text-white dark:hover:text-primary-400"
                        >
                          {next.title}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </div>

          <div className="mt-12 pt-8 text-center">
            <Link
              href="/blog"
              className="glass glass-hover inline-block rounded-full px-6 py-3 text-sm font-medium text-gray-900 transition-colors duration-200 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              ← Back to the blog
            </Link>
          </div>
        </article>
      </SectionContainer>
    </>
  )
}
