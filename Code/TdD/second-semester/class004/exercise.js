function toFloat(valor){
  return parseFloat(valor)
}
function twoPlaces(valor){
  return valor.toFixed(2)
}
function roundValue(valor){
  return Math.round(valor)
}
function insertCifrao(valor){
  return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function composicao(...funcoes){
  return function(valor){
    return funcoes.reduce((acc, current) => {
      return current(acc)
    }, valor)
  }
}

const resultado = composicao(toFloat, twoPlaces, roundValue, insertCifrao)
console.log(resultado('1980'));