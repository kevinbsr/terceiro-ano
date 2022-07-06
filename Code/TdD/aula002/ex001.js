// objetos //
/* Um par de chaves { } é uma forma literal de escrever um objeto */

/* Podemos criar atributos mesmo em objetos vazios a partir da notação de ponto */
aluno = {}
aluno.nome = 'Elzebio'
aluno.idade = 19
aluno.deficiencia = false
console.log(aluno)

cliente = {
  nome: 'João Pedro',
  celular: '229994177663',
  /* objeto dentro de outro objeto: */
  registro: {
    matricula: '202011230222',
    area: 'especial'
  }
}

//console.log(cliente);
//console.log(aluno.nome);
//console.log(cliente.registro.area);

cliente['endereco'] = 'Rua da França'
console.log(cliente)

exemploJSON = '{"nome": "Miguel", "idade": 20}'