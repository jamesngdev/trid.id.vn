export default function SectionContainer({ children, fullWidth = false }) {
  if (fullWidth) {
    return <div className="w-full">{children}</div>
  }
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
      {children}
    </div>
  )
}
