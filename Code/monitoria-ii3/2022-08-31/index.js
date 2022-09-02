function Lacamento(nome, valor){
  return {
    nome,
    valor
  }
}

function ControleFinanceiro(ano, mes, lancamentos = []) {
  return {
    ano,
    mes,
    lancamentos,
    addLancamentos(){
      
    }
  }
}