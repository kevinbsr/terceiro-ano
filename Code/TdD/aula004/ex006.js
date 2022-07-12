function criarFuncionario(nome, salario, faltas) {
  this.nome = nome,
  this.salario = salario,
  this.faltas = faltas
  
  return salario - (salario * (faltas/30))
}

const funcionario1 = new criarFuncionario('Kevin', 1000, 10)
const funcionario2 = new criarFuncionario('João', 2000, 20)
const funcionario3 = new criarFuncionario('Maria', 3000, 30)

console.log(funcionario1, funcionario2, funcionario3);