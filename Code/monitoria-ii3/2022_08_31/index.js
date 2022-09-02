// Part 1

function Lancamentos(nome, valor){
  this.nome = nome,
  this.valor = valor
  
  return nome, valor
}

lancamento01 = new Lancamentos('arroz', 23.99)
lancamento02 = new Lancamentos('Feijão', 13.99)
lancamento03 = new Lancamentos('Batata', 8.99)

// Part 2

function ControleFinanceiro(ano, mes){
  this.ano = ano,
  this.mes = mes,
  this.lancamentos = []

  yolo = function() {
    for (let i = 0; i < arguments.length; i++){
      const element = arguments[i];
      this.lancamentos.push(element)
    }
  }
  this.addLancamentos = yolo
  
/*   const valores = this.lancamentos.reduce(callback[, initialValue])

  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0); */

  
  //console.log(ano, mes, lancamento)
}

teste = new ControleFinanceiro(2022, 08)
teste.addLancamentos(lancamento01, lancamento02, lancamento03)
console.log(teste)