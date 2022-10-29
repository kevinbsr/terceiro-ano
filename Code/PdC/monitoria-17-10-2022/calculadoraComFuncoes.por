programa
{
	inteiro res
	funcao inicio(){
		inteiro a, b
		escreva("Digite um número: ")
		leia(a)
		escreva("Digite outro número: ")
		leia(b)
		verificaPositivo(a, b)
	}
	funcao verificaPositivo(inteiro a, inteiro b){
		se (a < 0 ou b < 0) {
			inicio()
		} senao {
			menu(a, b)
		}
	}
	funcao menu(inteiro a, inteiro b){
		escreva("1) Somar\n2) Subtrair\n3) Dividir\n4) Multiplicar\n")
		inteiro opcao
		leia(opcao)
		escolha(opcao) {
			caso 1:
				soma(a, b)
				pare
			caso 2:
				subtrair(a, b)
				pare
			caso 3:
				dividir(a, b)
				pare
			caso 4:
				multiplicar(a, b)
				pare
		}
	}
	funcao soma(inteiro a, inteiro b) {
		limpa()
		res = a + b
		escreva("O resultado desta soma é: ", res)
	}
	funcao subtrair(inteiro a, inteiro b) {
		limpa()
		res = a - b
		escreva("O resultado desta subtração é: ", res)
	}
	funcao dividir(inteiro a, inteiro b) {
		limpa()
		res = a / b
		escreva("O resultado desta divisão é: ", res)
	}
	funcao multiplicar(inteiro a, inteiro b) {
		limpa()
		res = a * b
		escreva("O resultado desta multiplicação é: ", res)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 98; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */