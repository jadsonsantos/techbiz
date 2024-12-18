import { Telefone } from '../../types'
import { formatPhone } from '../../utils'

interface TelefoneProps {
  telefone: Telefone
}

const PhoneSection = ({ telefone }: TelefoneProps) => {
  return (
    <article className="phone">
      <p className="text">Telefone: {formatPhone(telefone['phone number'])}</p>
      {telefone.operadora && (
        <p className="text">Operadora: {telefone.operadora}</p>
      )}
      {telefone.whatsapp && <p className="text">Possui Whatsapp</p>}
    </article>
  )
}

export default PhoneSection
