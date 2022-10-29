const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
/*let resultado = numeros.map(item => item + 100)
console.log(resultado);

const dobro = numeros.map(item => item * 2)
console.log(dobro);

let elevadoA2 = (x) => x**2

console.log(numeros.map(elevadoA2)) */

const soma100 = (e) => e + 100
const dobro = (e) => e * 2

let formatoMoeda = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
// console.log(numeros.map(soma100).map(dobro).map(formatoMoeda));

const carrinho = [
  '{"nome": "notebook", "preco": 6000 }',
  '{"nome": "computador", "preco": 4500 }',
  '{"nome": "teclado", "preco": 500 }',
  '{"nome": "mouse", "preco": 350 }',
]

const paraObjeto = (json) => JSON.parse(json)
const apenasNome = (produto) => produto.nome
const apenasPreco = (produto) => produto.preco

const res = carrinho.map(paraObjeto).map(apenasNome)
console.log(res);
