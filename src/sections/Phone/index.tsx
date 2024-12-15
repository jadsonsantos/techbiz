import { Telefone } from '../../types'

interface TelefoneProps {
  telefone: Telefone
}

const PhoneSection = ({ telefone }: TelefoneProps) => {
  return (
    <article className="phone">
      <p>Telefone: {telefone['phone number']}</p>
      {telefone.operadora && <p>Operadora: {telefone.operadora}</p>}
      {telefone.whatsapp && <p>Possui Whatsapp</p>}
    </article>
  )
}

export default PhoneSection
