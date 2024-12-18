import './Box.scss'

interface BoxProps {
  children: React.ReactNode
}

const Box = ({ children }: BoxProps) => {
  return <article className="box">{children}</article>
}

export default Box
