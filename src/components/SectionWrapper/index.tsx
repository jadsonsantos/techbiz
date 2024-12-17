import './SectionWrapper.scss'

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="section-wrapper">{children}</section>
}

export default SectionWrapper
