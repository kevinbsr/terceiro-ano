function pessoa(nome, endereco, anoNascimento) {
  ;(this.nome = nome),
    (this.getIdade = () => {
      idade = 2022 - anoNascimento
      return idade
    }),
    (this.anoNascimento = anoNascimento),
    (this.endereco = endereco)
}

const pessoa1 = new pessoa('Kevin', 'Rua Vinte e sete', 2004)
console.log(pessoa1, pessoa1.getIdade())
