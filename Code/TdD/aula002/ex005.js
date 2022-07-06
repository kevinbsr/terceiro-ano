function time(nome) {
  this.nome = nome
}
const exemplo01 = new time('Flamengo')

console.log(exemplo01.nome);

const exemplo02 = new time('Vasco')
console.log(exemplo02.nome);