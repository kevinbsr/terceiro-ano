/* Coleção dinâmica de pares chave/valor */

const fornecedor = new Object()
fornecedor.nome = "dell"
fornecedor['secao'] = 'eletrônicos'
fornecedor.endereco = "Av. João da Silva"
console.log(fornecedor);

delete fornecedor.endereco
console.log(fornecedor);