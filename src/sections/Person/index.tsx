import { Endereco, Pessoa } from '../../types'
import AddressSection from '../Address'
import PhoneSection from '../Phone'

interface PersonProps {
  pessoa: Pessoa
}

const Person = ({ pessoa }: PersonProps) => {
  return (
    <article className="person">
      <p>
        Nome: {pessoa['first names']} {pessoa.surname}
      </p>
      {pessoa.cpf && <p>CPF: {pessoa.cpf}</p>}
      {pessoa['data nascimento'] && (
        <p>Data de Nascimento: {pessoa['data nascimento']}</p>
      )}
      {pessoa['estado nascimento'] && (
        <p>Estado de Nascimento: {pessoa['estado nascimento']}</p>
      )}
      {pessoa.nacionalidade && <p>Nacionalidade: {pessoa.nacionalidade}</p>}
      {pessoa['pais nascimento'] && (
        <p>Pais de Nascimento: {pessoa['pais nascimento']}</p>
      )}

      {pessoa.idade && <p>Idade: {pessoa.idade}</p>}
      {pessoa.sexo && <p>Sexo: {pessoa.sexo}</p>}
      {pessoa.vinculo && <p>Vinculo: {pessoa.vinculo}</p>}
      {pessoa.escolaridade && <p>Escolaridade: {pessoa.escolaridade}</p>}

      {pessoa.telefone && (
        <>
          <h3>Telefones</h3>
          {pessoa.telefone.map((telefone) => (
            <PhoneSection key={telefone['phone number']} telefone={telefone} />
          ))}
        </>
      )}

      {pessoa?.endereco && Array.isArray(pessoa.endereco) ? (
        <>
          <h3>Endereço</h3>
          {pessoa.endereco.map((endereco: Endereco) => (
            <AddressSection key={endereco.bairro} endereco={endereco} />
          ))}
        </>
      ) : null}

      <h3>Outras Informações</h3>
      {pessoa['titulo de eleitor'] && (
        <p>Titulo de Eleitor: {pessoa['titulo de eleitor']}</p>
      )}
      {pessoa.ctps && <p>CTPS: {pessoa.ctps}</p>}
      {pessoa.indentidade && <p>Indentidade: {pessoa.indentidade}</p>}
      {pessoa.procon && <p>Procon: {pessoa.procon}</p>}
      {pessoa['pis/pasep'] && <p>PIS/PASEP: {pessoa['pis/pasep']}</p>}
      {pessoa['status receita'] && (
        <p>Status Receita: {pessoa['status receita']}</p>
      )}
    </article>
  )
}

export default Person
