const crescente = {
  _numero: 1,
  get numero(){
    return this._numero++;
  },
  set numero(x){
    if(x > this._numero){
      this._numero = x
    }
  }
}
console.log(crescente.numero)
console.log(crescente.numero)
crescente.numero = 100
console.log(crescente.numero);
console.log(crescente.numero);