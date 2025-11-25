'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="hero-typography text-gray-900 dark:text-white">{title}</h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="glass glass-hover block w-full rounded-2xl border-0 px-6 py-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 dark:text-gray-100 dark:placeholder-gray-400"
            />
            <svg
              className="absolute right-4 top-4 h-5 w-5 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="space-y-8">
          {!filteredBlogPosts.length && (
            <li className="py-12 text-center text-gray-500 dark:text-gray-400">No posts found.</li>
          )}
          {displayPosts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug}>
                <article className="glass glass-hover rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <time
                        dateTime={date}
                        className="text-sm font-medium text-gray-500 dark:text-gray-400"
                      >
                        {formatDate(date)}
                      </time>
                    </div>
                    <div>
                      <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tight">
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
                      <p className="prose max-w-none text-lg text-gray-600 dark:text-gray-400">
                        {summary}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <div className="mt-12">
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        </div>
      )}
    </>
  )
}
