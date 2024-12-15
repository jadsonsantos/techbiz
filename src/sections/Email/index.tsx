import { Email } from '../../types'

interface EmailProps {
  email: Email
}

const EmailSection = ({ email }: EmailProps) => {
  return (
    <article className="email">
      <p>Email: {email['email address']}</p>
    </article>
  )
}

export default EmailSection
