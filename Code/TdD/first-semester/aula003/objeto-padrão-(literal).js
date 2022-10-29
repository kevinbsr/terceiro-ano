const produto = {
  nome: 'Caneta',
  preco: 8.99,
  variacao: {
    quantidade: 0,
    desconto: 0.05,
    cor: 'azul, verde, vermelho, preto', 
    tamanho: '0.7'
  },
  getDesconto() {
    desconto = this.preco * this.variacao.desconto
    return this.preco - desconto
  },
  fornecedores: [
    (fornecedor1 = { nome: 'Marcos', telefone: 22999123456 }),
    (fornecedor2 = { nome: 'Gabriel', telefone: 11234567890 })
  ],
  setSoma() {
    this.variacao.quantidade += 100
  },
  setSubtrai() {
    this.variacao.quantidade -= 10
  },
  getQuantidade: () => {
    this.variacao.quantidade = setSoma(), setSubtrai()   
  }
}

console.log("==== Ficha do Produto ==== ", "\n Produto: " + produto.nome, "\n Preço: R$ " + produto.preco, "\n Quantidade: " + produto.variacao.quantidade, "\n Desconto: " + produto.variacao.desconto, "\n Cor(es): " + produto.variacao.cor, "\n Tamanho: " + produto.variacao.tamanho, "\n Fornecedores: " + "\n Nome: " + produto.fornecedores[0].nome + "\n Telefone: " + produto.fornecedores[0].telefone + "\n Nome: " + produto.fornecedores[1].nome, "\n Telefone: " + produto.fornecedores[1].telefone, "\n Preço com Desconto: R$ " + produto.getDesconto().toFixed(2))




console.log("\n Quantidade atual: ", produto.variacao.quantidade)
produto.setSoma()
console.log(" Quantidade do produto após a função setSoma(): ", produto.variacao.quantidade)
produto.setSubtrai()
console.log(" Quantidade do produtos após a função setSubtração(): ", produto.variacao.quantidade)