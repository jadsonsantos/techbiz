import { Empresa } from '../../types'

interface CompanyProps {
  empresa: Empresa
}

const Company = ({ empresa }: CompanyProps) => {
  return (
    <article className="company">
      <p>Empresa: {empresa['razao social']}</p>
      <p>CNPJ: {empresa.cnpj}</p>
      {empresa.admissao && <p>Admissão: {empresa.admissao}</p>}
      {empresa.renda && <p>Renda: {empresa.renda}</p>}
      <p>Vinculo: {empresa.vinculo}</p>
    </article>
  )
}

export default Company
