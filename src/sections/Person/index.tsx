import { Gender } from '../../enums'
import { Endereco, Pessoa } from '../../types'
import { formatCPF } from '../../utils'
import AddressSection from '../Address'
import PhoneSection from '../Phone'

interface PersonProps {
  pessoa: Pessoa
}

const Person = ({ pessoa }: PersonProps) => {
  return (
    <article className="person box">
      <h3 className="subtitle">Dados Pessoais</h3>
      <p className="text">
        Nome: {pessoa['first names']} {pessoa.surname}
      </p>
      {pessoa.cpf && <p className="text">CPF: {formatCPF(pessoa.cpf)}</p>}
      {pessoa['data nascimento'] && (
        <p className="text">Data de Nascimento: {pessoa['data nascimento']}</p>
      )}
      {pessoa['estado nascimento'] && (
        <p className="text">
          Estado de Nascimento: {pessoa['estado nascimento']}
        </p>
      )}
      {pessoa.nacionalidade && (
        <p className="text">Nacionalidade: {pessoa.nacionalidade}</p>
      )}
      {pessoa['pais_nascimento'] && (
        <p className="text">Pais de Nascimento: {pessoa['pais_nascimento']}</p>
      )}
      {pessoa.idade && <p className="text">Idade: {pessoa.idade}</p>}
      {pessoa.sexo && <p className="text">Sexo: {Gender(pessoa.sexo)}</p>}
      {pessoa.vinculo && <p className="text">Vinculo: {pessoa.vinculo}</p>}
      {pessoa.escolaridade && (
        <p className="text">Escolaridade: {pessoa.escolaridade}</p>
      )}
      {pessoa.telefone && (
        <>
          <h3 className="subtitle">Telefones</h3>
          {pessoa.telefone.map((telefone) => (
            <PhoneSection key={telefone['phone number']} telefone={telefone} />
          ))}
        </>
      )}
      {pessoa?.endereco && Array.isArray(pessoa.endereco) ? (
        <>
          <h3 className="subtitle">Endereço</h3>
          {pessoa.endereco.map((endereco: Endereco) => (
            <AddressSection key={endereco.bairro} endereco={endereco} />
          ))}
        </>
      ) : null}
      {pessoa['titulo de eleitor'] && (
        <>
          <h3 className="subtitle">Outras Informações</h3>
          <p className="text">
            Titulo de Eleitor: {pessoa['titulo de eleitor']}
          </p>
        </>
      )}
      {pessoa.ctps && <p className="text">CTPS: {pessoa.ctps}</p>}
      {pessoa.indentidade && (
        <p className="text">Indentidade: {pessoa.indentidade}</p>
      )}
      {pessoa.procon && <p className="text">Procon: {pessoa.procon}</p>}
      {pessoa['pis/pasep'] && (
        <p className="text">PIS/PASEP: {pessoa['pis/pasep']}</p>
      )}
      {pessoa['status receita'] && (
        <p className="text">Status Receita: {pessoa['status receita']}</p>
      )}
    </article>
  )
}

export default Person
