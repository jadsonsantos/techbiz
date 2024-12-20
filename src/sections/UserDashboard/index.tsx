import SectionWrapper from '../../components/SectionWrapper'
import SingleInfo from '../../components/SingleInfo'
import { Gender } from '../../enums'
import { UserInfos } from '../../types'
import { formatCNPJ, formatCPF, formatPhone } from '../../utils'
import './UserDashboard.scss'

interface UserDashboardProps {
  infoUser: UserInfos
}

const UserDashboard = ({ infoUser }: UserDashboardProps) => {
  const person = infoUser.pessoa.find((item) => item.bookmark === 'true')
  const nationality =
    person?.cidade_nascimento + '/' + person?.estado_nascimento

  if (!person) return null

  return (
    <section className="user-dashboard box">
      <h1 className="title">
        {person['first names']} {person.surname}
      </h1>
      <SectionWrapper>
        <SingleInfo subtitle="CPF: " text={formatCPF(person.cpf ?? '')} />
        <SingleInfo
          subtitle="Nacionalidade: "
          text={person.nacionalidade ?? ''}
        />
        <SingleInfo subtitle="Idade: " text={person.idade ?? ''} />
        {person.sexo && (
          <SingleInfo subtitle="Sexo: " text={Gender(person.sexo)} />
        )}
      </SectionWrapper>
      <SectionWrapper>
        <SingleInfo subtitle="Profissão: " text={person.profissao ?? ''} />
        <SingleInfo
          subtitle="Escolaridade: "
          text={person.escolaridade ?? ''}
        />
        <SingleInfo subtitle="Naturalidade: " text={nationality ?? ''} />
        <SingleInfo
          subtitle="País de Nascimento: "
          text={person['pais_nascimento'] ?? ''}
        />
      </SectionWrapper>
      <SectionWrapper>
        <h4 className="subtitle">Emails</h4>
        {infoUser.email?.map((email) => (
          <p className="text" key={email['email address']}>
            {email['email address']}
          </p>
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <h4 className="subtitle">Telefones</h4>
        {infoUser.telefone?.map((telefone) => (
          <article key={telefone['phone number']}>
            <p className="text" key={telefone['phone number']}>
              {formatPhone(telefone['phone number'])}
            </p>
            {telefone.operadora && (
              <p className="text">Operadora: {telefone.operadora}</p>
            )}
            {telefone.whatsapp == 'Sim' && (
              <p className="text">Possui Whatsapp</p>
            )}
          </article>
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <h4 className="subtitle">Endereços</h4>
        {infoUser.endereco?.map((endereco) => (
          <article key={endereco.logradouro}>
            <p className="text">
              <strong>Logradouro:</strong> {endereco.logradouro}
            </p>
            <p className="text">Bairro: {endereco.bairro}</p>
            <p className="text">Cidade: {endereco.city}</p>
            <p className="text">Estado: {endereco.area}</p>
            {endereco['area code'] && (
              <p className="text">CEP: {endereco['area code']}</p>
            )}
          </article>
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <h4 className="subtitle">Empresas</h4>
        {infoUser.empresa?.map((empresa) => (
          <article key={empresa.cnpj}>
            <p className="text">CNPJ: {formatCNPJ(empresa.cnpj)}</p>
            <p className="text">Razão Social: {empresa['razao social']}</p>
            <p className="text">Vínculo: {empresa.vinculo}</p>
            {empresa.renda && <p className="text">Renda: R$ {empresa.renda}</p>}
            {empresa.admissao && (
              <p className="text">Admissão: {empresa.admissao}</p>
            )}
          </article>
        ))}
      </SectionWrapper>
    </section>
  )
}

export default UserDashboard
