const read = require('readline-sync')

const gripe = []
const covid = []

menu()

function menu() {
  console.clear()
  let opcao = read.question('1. Cadastrar pessoas na fila da gripe.\n2. Cadastrar pessoas na fila da Covid\n3. Chamar pessoas na fila da gripe.\n4. Chamar pessoas na fila da Covid.\n5. Mostrar a fila da gripe.\n6. Mostrar a fila da Covid.\n7. Sair do programa \n\n')
  
  switch(opcao){
    case '1':
      cadastrarGripe()
      break
    case '2':
      cadastrarCovid()
      break
    case '3':
      chamarFilaGripe()
      break
    case '4':
      chamarFilaCovid()
      break
    case '5':
      mostrarFilaGripe()
      break
    case '6':
      mostrarFilaCovid()
      break
    default:
      console.clear()
      console.log('Fechando o programa...');
  }
}

function cadastrarGripe(){
  console.clear()
  let nome = read.question('Digite o nome da pessoa a ser cadastrada: ')
  gripe.push(nome)
  menu()
}
function cadastrarCovid(){
  console.clear()
  let nome = read.question('Digite o nome da pessoa a ser cadastrada: ')
  covid.push(nome)
  menu()
}
function chamarFilaGripe(){
  console.clear()
  if(gripe[0] === undefined){
    console.log('Não existem pessoas na fila a serem vacinadas.');
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  } else {
    console.log(`A próxima pessoa a ser vacinada contra a gripe é ${gripe.shift()}.`);
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  }
}
function chamarFilaCovid(){
  console.clear()
  if(covid[0] === undefined){
    console.log('Não existem pessoas na fila a serem vacinadas.');
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  } else {
    console.log(`A próxima pessoa a ser vacinada contra a Covid é ${covid.shift()}.`);
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  }
}
function mostrarFilaGripe(){
  console.clear()
  if(gripe[0] === undefined){
    console.log('Não existem pessoas na fila.');
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  } else {
    console.log('Estas são as pessoas na fila de vacinação contra a gripe:');
    for(let i = 0; i < gripe.length; i++){
      console.log(`${i+1}. ${gripe[i]}`);
    } 
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  }
}
function mostrarFilaCovid(){
  console.clear()
  if(covid[0] === undefined){
    console.log('Não existem pessoas na fila.');
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  } else {
    console.log('Estas são as pessoas na fila de vacinação contra a Covid:');
    for(let i = 0; i < covid.length; i++){
      console.log(`${i+1}. ${covid[i]}`);
    }
    read.question('Tecle qualquer botão para voltar ao menu.')
    menu()
  }
}