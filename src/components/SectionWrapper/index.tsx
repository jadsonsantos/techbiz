import './SectionWrapper.scss'

interface SectionWrapperProps {
  className?: string
  children: React.ReactNode
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  const customClass = className ? ` ${className}` : ''

  return (
    <section className={`section-wrapper${customClass}`}>{children}</section>
  )
}

export default SectionWrapper
