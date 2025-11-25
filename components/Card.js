'use client'

import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className={`${imgSrc && 'h-full'} glass glass-hover overflow-hidden rounded-2xl`}>
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="overflow-hidden">
              <div>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              </div>
            </div>
          </Link>
        ) : (
          <div className="overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </div>
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-base font-medium leading-6 text-primary-500 transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more
            <span>&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
