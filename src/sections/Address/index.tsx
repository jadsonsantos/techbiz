import { Endereco } from '../../types'

interface AddressProps {
  endereco: Endereco
}

const AddressSection = ({ endereco }: AddressProps) => {
  return (
    <article className="address">
      <p>
        {endereco.logradouro ? endereco.logradouro + ', ' : ''}
        {endereco.bairro}
      </p>
      {endereco['area code'] && <p>CEP: {endereco['area code']}</p>}
      <p>
        {endereco.city} - {endereco.area}
      </p>
    </article>
  )
}

export default AddressSection
