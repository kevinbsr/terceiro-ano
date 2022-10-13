// criação de objetos
const objt1 = {}
const objt2 = new Object()
objt2.atributo = 'valor'
console.log(objt2)

const descendente = Object.create(objt2, {
  nome: { value: 'exemplo', writable: false, enumerable: true }
})

descendente.nome = 'José'
console.log(descendente)
console.log(descendente.nome)

objt2.atributox = 'cpf'
objt2['atributoy'] = 'valor do atributo y'
let campo = 'idade'
objt2[campo] = 22
console.log(objt2)

var meuObj = new Object()
str = 'minha string'
aleatorio = Math.random()
// objeto[variável] = 'valor da variável'

// função construtora
function Produto(nome, preco, desconto) {
  this.nome = nome // atributo público
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
  }
}

const prod1 = new Produto('Monitor', 1500, 0.12)
const prod2 = new Produto('Mouse', 150, 0.12)
const prod3 = new Produto('Notebook', 15000, 0.25)
const prod4 = new Produto('Teclado', 500, 0.2)

console.log(prod1.getPrecoComDesconto())

function teste(a=1){
  console.log((a= a!=undefined ? a : 1));
  console.log((a = 0 in arguments ? a:1));
  console.log((a = isNaN(a)? 1 : a));
  console.log((a = a|| 1));
}


const destino = {a:1}
const obj1 = {b:2}
const obj2 = {a:3, c:4}
const resultado = Object.assign(destino, obj1, obj2)
console.log(resultado);