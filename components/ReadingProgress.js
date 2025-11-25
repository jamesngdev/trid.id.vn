import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollableHeight = documentHeight - windowHeight
      const scrollProgress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5">
      <div
        className="h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent backdrop-blur-sm transition-all duration-300 dark:via-gray-600"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
