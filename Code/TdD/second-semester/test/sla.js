const funcionario= require('./funcionarios');
const pais = p => p.pais
console.log(funcionario.map(pais))

const chi = chi => chi.pais=="China"
var ch = funcionario.filter(chi)
console.log(ch)

const mulher = mulher => mulher.genero=="F"
var mulhe = ch.filter(mulher)
console.log(mulhe)

const higherWage = mulhe.reduce(function(prev, current) {
    return (prev.salario > current.salario) ? prev : current
})
console.log(higherWage)

const sal = sal => sal.salario
const f = mulhe.map(sal)
console.log(f)

let total = f.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
  }, 0)
console.log(total)