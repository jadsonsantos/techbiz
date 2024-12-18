const formatPhone = (phone: string) => {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const formatCNPJ = (cnpj: string) => {
  return cnpj
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{3})?(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

const formatCPF = (cpf: string) => {
  const cpfCleaned = cpf.replace(/\D/g, '')
  return `${cpfCleaned.slice(0, 3)}.${cpfCleaned.slice(3, 6)}.${cpfCleaned.slice(6, 9)}-${cpfCleaned.slice(9, 11)}`
}

const formatName = (name: string) => {
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export { formatPhone, formatCNPJ, formatCPF, formatName }
