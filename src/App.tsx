import { useEffect, useState } from 'react'
import { fetchInfoUser } from './services'
import { UserInfos } from './types'
import Person from './sections/Person'
import SectionWrapper from './components/SectionWrapper'
import './styles/index.scss'
import UserDashboard from './sections/UserDashboard'

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
    <main className="main">
      {infoUser && (
        <div className="container">
          <UserDashboard infoUser={infoUser} />
          <h2 className="title">Vínculos</h2>
          <SectionWrapper className="section-wrapper--person">
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
