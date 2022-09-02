raizQuadrada(5, 4)

function raizQuadrada (a, b) {
  c = a + b
  console.log(Math.sqrt(c))
}

function diferenca(a, b) {
  if (a > b) {
    return a - b
  } else {
    return b - a
  }
}

console.log(diferenca(20, 40))

function mostra(a) {
  console.log(a=a!=undefined?a:1)
  console.log(a=0 in arguments?a:1)
  console.log(a=isNaN(a)?1:a)
  console.log(a=a||1)
}
let x = 'teste'
mostra(x)