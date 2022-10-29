const avo = {atributo1: 'atributo 1'}
const pai = {
  __proto__: avo,
  atributo2: 'b',
  atributo3: 'c'
}
console.log(pai.atributo1);
const filho = {
  __proto__: pai,
  atributo2: 'atributo filho 2',
}
console.log(filho.atributo1);

for (let chave in filho){
  filho.hasOwnProperty.apply(chave) ? console.log(`dono: ${chave}`) : console.log(`herdado: ${chave}`);
}