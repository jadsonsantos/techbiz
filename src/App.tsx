import { useEffect, useState } from 'react'
import { fetchInfoUser } from './services'
import { UserInfos } from './types'
import AddressSection from './sections/Address'
import PhoneSection from './sections/Phone'
import EmailSection from './sections/Email'
import Company from './sections/Company'
import Person from './sections/Person'
import SectionWrapper from './components/SectionWrapper'
import './styles/index.scss'

function App() {
  const [infoUser, setInfoUser] = useState<UserInfos | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInfoUser()
        setInfoUser(data[0])
      } catch (error) {
        console.error('Error fetching user info:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <main>
      {infoUser && (
        <div className="container">
          <h2>Emails</h2>
          <SectionWrapper>
            {infoUser?.email?.map((email) => (
              <EmailSection key={email['email address']} email={email} />
            ))}
          </SectionWrapper>
          <h2>Endereços</h2>
          <SectionWrapper>
            {infoUser.endereco.map((endereco) => (
              <AddressSection key={endereco.logradouro} endereco={endereco} />
            ))}
          </SectionWrapper>
          <h2>Telefones</h2>
          <SectionWrapper>
            {infoUser?.telefone?.map((telefone) => (
              <PhoneSection
                key={telefone['phone number']}
                telefone={telefone}
              />
            ))}
          </SectionWrapper>
          <h2>Empresas</h2>
          <SectionWrapper>
            {infoUser?.empresa?.map((empresa) => (
              <Company key={empresa['razao social']} empresa={empresa} />
            ))}
          </SectionWrapper>
          <h2>Pessoas</h2>
          <SectionWrapper>
            {infoUser?.pessoa?.map((pessoa) => (
              <Person key={pessoa['first names']} pessoa={pessoa} />
            ))}
          </SectionWrapper>
        </div>
      )}
    </main>
  )
}

export default App
