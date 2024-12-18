export interface Email {
  'email address': string
}

export interface Endereco {
  area: string
  'area code'?: string
  bairro: string
  city: string
  complemento?: string
  logradouro?: string
  nome?: string
  numero?: string
  'telefone relacionado'?: string
  'cep ou zipcode'?: string
  endereco?: string
}

export interface Telefone {
  operadora?: string
  'phone number': string
  whatsapp?: string
}

export interface Empresa {
  cnpj: string
  vinculo: string
  renda: string
  admissao: string
  endereco: Endereco[]
  'razao social': string
  telefone?: Telefone[]
}

export interface Pessoa {
  cpf: string
  'data nascimento': string
  'first names': string
  'full name': string
  vinculo: string
  endereco?: Endereco[] | string
  procon?: string
  sexo?: string
  surname?: string
  'titulo de eleitor'?: string
  telefone?: Telefone[]
  bookmark?: string
  location?: Location[]
  ctps?: string
  profissao?: string
  escolaridade?: string
  estado_nascimento?: string
  'estado nascimento'?: string
  cidade_nascimento?: string
  idade?: string
  indentidade?: string
  nacionalidade?: string
  pais_nascimento?: string
  'pis/pasep'?: string
  'status receita'?: string
  empresa?: string
}

export interface Location {
  area: string
  area_code: string
  bairro: string
  city: string
  logradouro: string
  numero: string
}

export interface TelefoneContato {
  phone_number: string
}

export interface Contato {
  first_names: string
  full_name: string
  vinculo: string
  location?: Location
  telefone?: TelefoneContato
  surname?: string
}

export interface UserInfos {
  email?: Email[]
  empresa: Empresa[]
  endereco: Endereco[]
  pessoa: Pessoa[]
  telefone?: Telefone[]
}
