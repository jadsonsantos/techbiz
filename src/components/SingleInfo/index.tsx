interface SingleInfoProps {
  subtitle: string
  text: string | number
}

const SingleInfo = ({ subtitle, text }: SingleInfoProps) => {
  if (!text) return null

  return (
    <div className="single-info">
      <p className="subtitle">{subtitle}</p>
      <p className="text">{text || 'Não informado'}</p>
    </div>
  )
}

export default SingleInfo
