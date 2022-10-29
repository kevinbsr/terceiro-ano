const produto = {
  nome: 'Notebook',
  preco: 2499.9,
  ativo: false,
  fornecedor: {
    nome: 'Samsung',
    contato: 'joão'
  },
  ativarCliente: function() {
    if(this.ativo == true) {
      this.ativo = false;
    } else {
      this.ativo = true;
    }
  }
}

console.log(produto)
console.log(produto)

produto.ativarCliente()
// destructuring
const {nome, preco} = produto
console.log(nome, preco)

/* produto.cor = 'cinza'
produto['tamanho'] = 15.6
produto['tamanho'] = 13
console.log(produto.fornecedor.nome, produto) */