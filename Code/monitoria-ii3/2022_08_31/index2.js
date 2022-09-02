class Lancamento {
  constructor(nome = 'nome', valor = 0) {
    this.nome = nome,
    this.valor = valor
  }
}
class ControleFinanceiro {
  constructor(mes, ano) {
    this.mes = mes,
    this.ano = ano,
    this.lancamentos = []
  }
  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l))
  }
  saldo() {
    let valorConsolidado = 0
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('salario', 5000)
const rendimentos = new Lancamento('rendimentos', 11.58)
const condominio = new Lancamento('luz', -347)
const prestacaoCarro = new Lancamento('carro', -2500)
const controle = new ControleFinanceiro(06, 2022)
controle.addLancamentos(salario, rendimentos, condominio, prestacaoCarro)
console.log(controle.saldo())