//instancie 2 objetos apartir da função mercadoria que construa esses objetos a partir de parametros publicos (utilizando this), (utilize os mesmos atributos citados acima e no item anterior) e exiba os objetos

function mercadoria(preco = 0, quantidade = 0, desconto = 0, tamanho = 0, cor = "preto",) {
  this.cor = cor
  this.preco = preco
  this.quantidade = quantidade
  this.desconto = desconto
  this.tamanho = tamanho
}

let caneta1 = new mercadoria(8.99, 100, 0.05, 0.7, "vermelho")
let caneta2 = new mercadoria(7.99, 50, 0.02, 0.10)

console.log(caneta1, caneta2);