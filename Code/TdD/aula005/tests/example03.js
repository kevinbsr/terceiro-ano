var meuCarro = new Object()

meuCarro.fabricacao = 'Ford'
meuCarro.modelo = 'Mustang'
meuCarro.ano = 1969

meuCarro.semPropriedade //undefined

// meuCarro['Fabricacao'] = 'Ford'
// meuCarro['Modelo'] = 'Mustang'
// meuCarro['Ano'] = 1969

var meuObj = new Object(),
    str = 'minhaString',
    aleat = Math.random(),
    obj = new Object()

meuObj.tipo = 'Sintaxe de ponto'
meuObj['data de criacao'] = 'String com espaço'
meuObj[str] = 'valor de String'
meuObj[aleat] = 'Número aleatório'
meuObj[obj] = 'Objeto'
meuObj[''] = 'Mesmo uma string vazia'

// console.table(meuObj)

// var nomeDaPropriedade = 'Fabricacao'
// meuCarro[nomeDaPropriedade] = 'Ford'

// nomeDaPropriedade = 'modelo'
// meuCarro[nomeDaPropriedade] = 'Mustang'

function mostrarProps(obj, nomeDoObj) {
  var resultado = ''
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + '.' + i + ' = ' + obj[i] + '\n'
    }
  }
  return resultado
}

console.log(mostrarProps(meuCarro, 'meuCarro'));