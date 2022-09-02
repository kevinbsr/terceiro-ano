class Lancamento {
  constructor(nome = "nome", valor = 0) {
       this.nome = nome;
       this.valor = valor;
  }
}
class CicloFinance {
  constructor(mes, ano) {
       this.mes = mes;
       this.ano = ano;
       this.lancamentos = [];
  }
  addLancamentos(...lancamentos) {
       lancamentos.forEach((l) => this.lancamentos.push(l));
  }
  sumario() {
       let valorConsolidado = 0;
       this.lancamentos.forEach((l) => {
            valorConsolidado += l.valor;
       });
       return valorConsolidado;
  }
}

const rendimentos = new Lancamento("rendimentos", 100000.0);
const condominio = new Lancamento("luz", -347);
const prestacaoCarro = new Lancamento("carro", -2500.0);
const controle = new CicloFinance(6, 2022);
controle.addLancamentos(rendimentos, condominio, prestacaoCarro);
console.log(controle.sumario());
console.log("------------------------");


class Avo {
  constructor(nome, sobrenome) {
       this.nome = nome;
       this.sobrenome = sobrenome;
  }
}
class Pai extends Avo {
  costructor(nome, sobrenome, profissao = "engenheiro") {
       this.nome = nome;
       //super(sobrenome);
       this.profissao = profissao;
  }
}