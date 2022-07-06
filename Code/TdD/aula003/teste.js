const produto = {
  nome: 'Caneta',
  preco: 1.9,
  variacao: {
    quantidade: '',
    desconto: 0.5,
    cor: 'azul',
    tamanho: '0.7'
  },
  getDesconto: () => { this.preco * this.variacao.desconto }
}

console.log(produto.variacao.desconto);
/* console.log(produto.getDesconto()); */