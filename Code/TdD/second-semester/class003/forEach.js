const alunos = ['João', 'Maria', 'José', 'Guilherme']

/* console.log(alunos);

for(let i = 0; i < alunos.length; i++){
  console.log(`Índice ${i}: ${alunos[i]}`);
}
 */
/* alunos.forEach(function(nome, indice, array, qqq){
  console.log(`índice ${indice}: valor: ${nome} - ${array}`);
}) */

// alunos.forEach((nome)=>console.log(nome))

const exibirAlunos = (atributoValor, indicex)=> console.log(`indice ${indicex} aluno: ${atributoValor}`);
alunos.forEach(exibirAlunos)