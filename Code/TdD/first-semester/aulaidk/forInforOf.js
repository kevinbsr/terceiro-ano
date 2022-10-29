const valores = [6.0, 3.3, 5.3, 6.7, 9.1, 9.9, 7.7]

for (let i in valores){
  console.log(`${i + 1} valores: ${valores[i]}`)
}

var objeto = {a: 10, b: 40, c: 7, d: 12}
for(var i in objeto){
  console.log(`Objeto ${i} = ${objeto[i]}`);
}

var alunos = ['João', 'Maria', 'Manoel', 'Joaquim', 'Pedro']
for(var i in alunos){
  console.log(i)
}
for(var i of alunos){
  console.log(i)
}