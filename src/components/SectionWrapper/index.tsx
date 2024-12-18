import './SectionWrapper.scss'

interface SectionWrapperProps {
  className?: string
  children: React.ReactNode
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={`section-wrapper ${className}`}>{children}</section>
  )
}

export default SectionWrapper
