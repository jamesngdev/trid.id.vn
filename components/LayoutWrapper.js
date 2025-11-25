'use client'

import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <SectionContainer>
          <div className="flex items-center justify-between">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center">
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="text-xl font-semibold tracking-tight">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
            <div className="flex items-center text-sm font-medium">
              <nav className="hidden sm:flex sm:items-center sm:space-x-1">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="relative px-4 py-2 text-gray-900 transition-colors duration-200 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                  >
                    <span>{link.title}</span>
                  </Link>
                ))}
              </nav>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </SectionContainer>
      </header>
      <main className="mt-24 flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
