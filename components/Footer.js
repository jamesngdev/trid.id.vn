'use client'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import SectionContainer from './SectionContainer'

export default function Footer() {
  return (
    <footer className="hairline-border mt-32 border-t border-gray-200 dark:border-gray-800">
      <SectionContainer>
        <div className="py-12 md:py-16">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <div>
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
              </div>
              <div>
                <SocialIcon kind="github" href={siteMetadata.github} size="6" />
              </div>
              <div>
                <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
              </div>
              <div>
                <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
              </div>
              <div>
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
              </div>
              <div>
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div>{siteMetadata.author}</div>
              <div>{` • `}</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
              <div>{` • `}</div>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {siteMetadata.title}
              </Link>
            </div>
            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              <Link
                href="https://fb.me/mintridev"
                className="transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Here get your boyfriend's developer 👨🏻‍💻
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
