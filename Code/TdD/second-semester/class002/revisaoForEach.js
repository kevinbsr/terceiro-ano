const alunos = ['João', 'Gabriel', 'Paulo', 'Guilherme']

console.log('Exemplo de for \n_____________________________');

for(let i = 0; i < alunos.length; i++){
  console.log(`Indice ${i} --> aluno: ${alunos[i]}`);
}
console.log(`\nExemplo de ForEach \n_____________________________________________________________`);
alunos.forEach(function(nome, indice, array){
  console.log(`Indice ${indice} nome: ${nome} - array ${array}`);
})

alunos.forEach((nome) => console.log(nome))

console.log(`\n__________________________________`);
const exibirAluno = (nome) => console.log("aluno:", nome);
alunos.forEach(exibirAluno)