const Gender = (gender: string) => {
  switch (gender) {
    case 'M':
      return 'Masculino'
    case 'F':
      return 'Feminino'
    default:
      return 'Não informado'
  }
}

export { Gender }
