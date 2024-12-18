import { Endereco } from '../../types'

interface AddressProps {
  endereco: Endereco
}

const AddressSection = ({ endereco }: AddressProps) => {
  return (
    <article className="address">
      <p className="text">
        {endereco.logradouro ? endereco.logradouro + ', ' : ''}
        {endereco.bairro}
      </p>
      {endereco['area code'] && (
        <p className="text">CEP: {endereco['area code']}</p>
      )}
      <p className="text">
        {endereco.city} - {endereco.area}
      </p>
    </article>
  )
}

export default AddressSection
