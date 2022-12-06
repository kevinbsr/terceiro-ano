const read = require('readline-sync')

let moedas = [
  {
    nome: 'Real',
    valor: 1,
    sigla: 'R$'
  },
  {
    nome: 'Dólar',
    valor: 3.80,
    sigla: 'U$'
  }
]

menu()
// Parte 0
function menu() {
  console.clear()
  option = read.question(`Selecione uma das opções abaixo: \n1. Converter valores\n2. Exibir tarifas de conversão\n3. Atualizar tarifas de conversão\n4. Adicionar uma nova moeda\n5. Encerrar programa\n\n`)

  switch(option){
    case '1':
      console.clear()
      converterValores()
      break
    case '2':
      console.clear()
      exibirTarifas()
      break
    case '3':
      console.clear()
      atualizarTarifas()
      break
    case '4':
      console.clear()
      adicionarMoeda()
      break
    case '5':
      console.clear()
      console.log(`Encerrando programa...`)
      break;
    default:
      console.clear()
      console.log(`Opção inválida! Tente novamente.`);
      read.question(`Pressione qualquer tecla para retornar ao menu.`)
      menu()
  }
}
// Parte 1
function converterValores(){
  console.log(`Selecione a moeda de origem: `);
  for(let i = 0; i < moedas.length; i++){
    console.log(`${i+1}. ${moedas[i].nome}`);
  }
  moedaOrigem = read.question()

  console.log(`Selecione a moeda de destino: `);
  for(let i = 0; i < moedas.length; i++){
    console.log(`${i+1}. ${moedas[i].nome}`);
  }
  moedaDestino = read.question()

  moedaOrigem = moedaOrigem - 1
  moedaDestino = moedaDestino - 1
  console.clear()
  valor = read.question(`Digite o valor a ser convertido: `)
  console.clear()
  if(moedas[moedaOrigem].valor > moedas[moedaDestino].valor){
    resultado = moedas[moedaOrigem].valor * valor
    console.log(`O resultado do valor convertido de ${moedas[moedaOrigem].nome} para ${moedas[moedaDestino].nome} é ${moedas[moedaDestino].sigla} ${resultado.toFixed(2)}\n`);

    read.question(`Pressione qualquer tecla para retornar ao menu.`)
    menu()
  } else {
    resultado = (moedas[moedaOrigem].valor / moedas[moedaDestino].valor) * valor
    console.log(`O resultado do valor convertido de ${moedas[moedaOrigem].nome} para ${moedas[moedaDestino].nome} é ${moedas[moedaDestino].sigla} ${resultado.toFixed(2)}\n`);
    
    read.question(`Pressione qualquer tecla para retornar ao menu.`)
    menu()
  }
}
// Parte 2
function exibirTarifas(){
  console.log(`Lista de tarifas de conversão das moedas: \n`);
  for(let i = 0; i < moedas.length; i++){
    console.log(`A tarifa de conversão da moeda ${moedas[i].nome} é de ${moedas[0].sigla} ${moedas[i].valor}.`);
  }

  read.question(`\nPressione qualquer tecla para retornar ao menu.`)
  menu()
}
// Parte 3
function atualizarTarifas() {
  console.log(`Lista de moedas e suas tarifas: \n`);
  for(let i = 0; i < moedas.length; i++){
    console.log(`${i + 1}. ${moedas[i].nome}: ${moedas[0].sigla} ${(moedas[i].valor)}.`);
  }
  option = read.question(`\nSelecione a moeda no qual deseja alterar a tarifa: `)
  option = option - 1 //1
  
  novoValor = read.question(`Digite o novo valor para a tarifa: `)
  moedas[option].valor = novoValor

  read.question(`\nTarifa atualizada!\nPressione qualquer tecla para retornar ao menu.`)
  menu()
}
// Parte [Extra]
function adicionarMoeda(){
  nome = read.question(`Digite o nome da nova moeda: `)
  valor = read.question(`Digite o valor da tarifa de conversão em Real: `)
  sigla = read.question(`Digite a sigla da moeda (ex.: R$): `)

  moedas.push({nome: nome, valor: valor, sigla: sigla})

  read.question(`\nNova moeda adicionada!\nPressione qualquer tecla para retornar ao menu.`)
  menu()
} 