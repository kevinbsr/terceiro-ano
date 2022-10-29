Array.prototype.forEachAula = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this, 'Kevin')
  }
}

const alunos = ['João', 'Maria', 'José', 'Guilherme']

alunos.forEachAula(function(nome, indice, array, autor){
  console.log(`${indice} ${nome} ${array} ${autor}`);
})