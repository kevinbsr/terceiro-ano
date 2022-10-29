const carro = {
  velMaxima: 200,
  velAtual: 0,

  setAcelerar(valor){
    if(this.velAtual + valor <= this.velMaxima){
      this.velAtual += valor;
    } else {
      this.velAtual = this.velMaxima
    }
  },
  setFreiar(valor){
    if(this.velAtual - valor >= 0){
      this.velAtual -= valor
    } else {
      this.velAtual = 0
    }
  },
  getVelAtual(){
    return `O carro de modelo ${this.modelo} está a ${this.velAtual} Km/h de ${this.velMaxima}`
  }
}

const ferrari = {
  __proto__: carro,
  modelo: 'F40',
  velMaxima: 320 
}

ferrari.setAcelerar(80)
ferrari.setAcelerar(70)
ferrari.setAcelerar(50)
console.log(ferrari.getVelAtual());
ferrari.setFreiar(20)
console.log(ferrari.getVelAtual());
ferrari.setFreiar(20)
console.log(ferrari.getVelAtual());
ferrari.setFreiar(20)
console.log(ferrari.getVelAtual());
ferrari.setFreiar(20)
console.log(ferrari.getVelAtual());
ferrari.setFreiar(20)
console.log(ferrari.getVelAtual());

const audi = {
  __proto__: carro,
  modelo: 'S7',
  velMaxima: 250,
}

audi.setAcelerar(80)
audi.setAcelerar(70)
audi.setAcelerar(100)
console.log(`\n${audi.getVelAtual()}`);
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());
audi.setFreiar(20)
console.log(audi.getVelAtual());

const volvo = {
  modelo: 'A30',
  getVelAtual(){
    return `${this.modelo}: ${super.getVelAtual()}`
  }
}
// criando herança a partir de Object.setPrototypeOf
Object.setPrototypeOf(volvo, carro)
volvo.setAcelerar(120)
volvo.setFreiar(30)
console.log(volvo.getVelAtual());