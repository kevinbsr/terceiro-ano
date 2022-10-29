function funcionario(nome, salario, faltas) {
  desconto = (salario / 30) * faltas
  return salario - desconto
}

console.log(funcionario('João', 2000, 3))
console.log(funcionario('Maria', 2500, 5))
