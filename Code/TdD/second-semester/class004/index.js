function composicao(f1, f2, f3, valor){
  return f3(f2(f1(valor)))
}
function gritar(texto){
  return texto.toUpperCase()
}
function enfatizar(texto){
  return `=> ${texto}!!!`
}
function espacar(texto){
  return texto.split("").join(" ")
}

const resultado = composicao(gritar, enfatizar, espacar, "Olá, mundo!")
console.log(resultado);

function composicao2(f1, f2, f3){
  return function(valor){
    return f3(f2(f1(valor)))
  }
}
const resultado2 = composicao2(
  gritar,
  enfatizar,
  espacar
)("Qualquer texto passado")
console.log(resultado2);

const resultado3 = composicao2(gritar, enfatizar, espacar)
console.log("--------\n");

console.log(resultado3("ainda mais flexível"));
console.log(resultado3("espetacular"));

function composicao3(...funcoes){
  return function(valor){
    return funcoes.reduce((acumulador, funcao) => {
      return funcao(acumulador)
    }, valor)
  }
}

const menosFuncs = composicao3(gritar, enfatizar)
console.log(menosFuncs("Texto sem separação"));