'use client'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import SectionContainer from '@/components/SectionContainer'

import NewsletterForm from '@/components/NewsletterForm'
import { Bio } from '@/components/bio'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1, MAX_DISPLAY)

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <SectionContainer>
        <Bio />

        {/* Featured Post */}
        {featuredPost && (
          <div className="my-20">
            <div className="glass glass-hover rounded-3xl p-8 md:p-12">
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Featured
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-gray-900 transition-colors duration-200 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                  {featuredPost.title}
                </Link>
              </h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
              <span className="mb-4 block text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
              </span>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                {featuredPost.summary}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1 text-base font-medium text-primary-500 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${featuredPost.title}"`}
              >
                Read more
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        )}

        {/* Post Grid */}
        {otherPosts.length > 0 && (
          <div className="my-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Latest Articles
            </h2>
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((frontMatter, index) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                  <li key={slug}>
                    <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                      <div className="mb-4">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </span>
                      </div>
                      <h3 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 transition-colors duration-200 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <p className="prose mb-4 max-w-none flex-grow text-gray-600 dark:text-gray-400">
                        {summary}
                      </p>
                      <Link
                        href={`/blog/${slug}`}
                        className="mt-auto inline-flex items-center gap-1 text-base font-medium text-primary-500 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more
                        <span>&rarr;</span>
                      </Link>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {posts.length > MAX_DISPLAY && (
          <div className="my-20 flex justify-center">
            <Link
              href="/blog"
              className="glass glass-hover rounded-full px-8 py-4 text-base font-medium text-gray-900 transition-colors duration-200 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
              aria-label="all posts"
            >
              View All Posts
            </Link>
          </div>
        )}
      </SectionContainer>
    </>
  )
}
