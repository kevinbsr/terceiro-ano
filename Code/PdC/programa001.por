programa
{
	//Escreva um programa no portugol, onde duas variávei númericas são declaradas e tem
	//seu valor declarado pelo usuário. Utilizando o comando escreva, realize as 4 operações
	//básicas com os números informados.
	
	funcao inicio()
	{
		inteiro n1, n2
		escreva("Digite o primeiro número: ")
		leia(n1)
		escreva("Digite o segundo número: ")
		leia(n2)

		limpa()
		
		escreva("A soma de ", n1, " + ", n2, " é igual a ", n1+n2)
		escreva("\nA subtração de ", n1, " - ", n2, " é igual a ", n1-n2)
		escreva("\nA multiplicação de ", n1, " * ", n2, " é igual a ", n1*n2)
		escreva("\nA divisão de ", n1, " / ", n2, " é igual a ", n1/n2)		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 370; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */