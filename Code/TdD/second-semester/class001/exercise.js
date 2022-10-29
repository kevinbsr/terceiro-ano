function Funcionario(nome, salario, faltas) {
  this.nome = nome,
  this.getSalario = () => salario - faltas * (salario / 30)
}

const func1 = new Funcionario('Kevin', 5000, 3)
const func2 = new Funcionario('Rachel', 10000, 4)
console.log(func1.getSalario())
console.log(`Funcionário: ${func2.nome} Salário: ${func2.getSalario()}`);
