'use client'
import Link from './Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <span className="glass glass-hover inline-block rounded-full px-3 py-1 text-xs font-medium uppercase text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        {text.split(' ').join('-')}
      </span>
    </Link>
  )
}

export default Tag
