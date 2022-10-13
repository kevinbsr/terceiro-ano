const frutas = ['Banana', 'Pera', 'Uva', 'Abacaxi', 'Maçã', 'Melancia', 'Manga']

frutas.forEach(function(nome){
  console.log(`${nome}`)
})

frutas.forEach(function(nome, indice){
  console.log(`${nome} => índice ${indice}`)
})

frutas.forEach((nome) => console.log(nome))
frutas.forEach((nome, indice) => console.log(`${nome} - índice: ${indice}`))

const exibirFrutas = (fruta, indice) => console.log(`${indice +1} ${fruta}`)

frutas.forEach(exibirFrutas)

frutas.forEach(function(nome, indice, array){
  console.log(`Índice: ${indice +1}, valor: ${nome}, array: ${array}`)
})