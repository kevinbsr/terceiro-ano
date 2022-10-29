console.log("VACINAÇÃO DE COVD E GRIPE");

const rsp= require("readline-sync")
const gripe=[]
const covid=[]

menu()

function menu(){
    console.clear()
    op= rsp.question("1- Cadastrar pessoa na fila da vacina contra a gripe \n 2- Cadastrar pessoa na fila da vacina contra a COVID \n 3- Chamar pessoa da fila para aplicar vacina contra a gripe \n 4- Chamar pessoa da fila para aplicar vacina contra a COVID \n 5- Mostrar pessoas na fila da vacina contra a gripe \n 6- Mostrar pessoas na fila da vacina contra a COVID \n 7- Sair do programa");
   
    switch (op) {
        case '1':
            console.log("ok, voce está cadastrado(a) na fila da vacinação contra a gripe");
            cadastrarGripe() 
            break
    
        case '2':
            console.log("bele, voce foi cadastrado na fila da vacinação do COVID");
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
                clear()

        case '7':
            console.log("Babai, até logo!");
            break
    }

    function cadastrarGripe(){
        let nome= rsp.question("Digite o nome para cadastro, por favor:")
        gripe.push(nome)
        menu()
    } 

    function cadastrarCovid(){
        let nome= rsp.question("meu mano, digite o nome para cadastro:")
        covid.push(nome)
        menu()
    }

    function chamarFilaGripe() {
        console.log(gripe[0]," Você é a próxima pessoa a ser vacinada");
        gripe.shift()
        rsp.question("Aperte qualquer tecla para ver o menu")
        menu()
        
    }

    function chamarFilaCovid(){
        console.log(covid[0]," Você é a próxima pessoa a ser vacinada");
        covid.shift()
        rsp.question("Aperte qualquer tecla para ver o menu")
        menu()
    }

    function mostrarFilaGripe(){
        console.log("As pessoas que estão na fila da gripe são: ");
        for (let i = 0; i < gripe.length; i++) {
            console.log(gripe[i]);
        }
        rsp.question("Aperte qualquer tecla para ver o menu")
        menu()
    }

    function mostrarFilaCovid(){
        console.log("As pessoas que estão na fila do covid são: ");
        for (let i = 0; i < covid.length; i++) {
            console.log(covid[i]);
        }
        rsp.question("Aperte qualquer tecla para ver o menu")
        menu()
    }
}