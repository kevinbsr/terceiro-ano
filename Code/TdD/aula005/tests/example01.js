/* const microfone = {
  color: 'black',
  isOn: true,
  toggleOnOff(){
    if (this.isOn) {
      console.log('desligar')
    } else {
      console.log('ligar')
    }
    this.isOn = !this.isOn
  }
}

console.log(microfone); */

// microfone.toggleOnOff()
// microfone.toggleOnOff()

// Object Literal

/* const pessoa = {
  nome: 'Kevin',
  idade: 18,
  change(novoNome) {
    this.nome = novoNome
  }
}

console.table(pessoa)
pessoa.change('Luísa')
console.table(pessoa) */

// Factory

/* function createMicrofone(color = 'black') {
  let isOn = true

  return {
    color: color,
    isOn,

    toggleOnOff() {
      if (isOn) {
        console.log('desligar')
      } else {
        console.log('ligar')
      }
      isOn = !isOn
    }
  }
}

const microfoneBlack = createMicrofone()
//const microfoneWhite = createMicrofone('white')

console.log(microfoneBlack) */

// Prototype
/* function Microfone(color = 'black') {
  this.color = color,
  this.isOn = true
}

Microfone.prototype.toggleOnOff = function () {
  if (this.isOn) {
    console.log('desligar')
  } else {
    console.log('ligar')
  }
  this.isOn = !this.isOn
}

const microfone = new Microfone()
const microfone2 = new Microfone('white')

console.log(microfone)
console.log(microfone2)

microfone2.toggleOnOff()
microfone2.toggleOnOff()
microfone2.toggleOnOff()
microfone2.toggleOnOff()
microfone2.toggleOnOff() */


const ficha = {
  nome: 'Kevin',
  idade: 18,
  change(novoNome) {
    this.nome = novoNome
  }
}

const ficha2 = {
  nome: 'Pedro',
  sobrenome: 'Benevides',
  sexo: 'masculino',
  vacinado: true
}

ficha.__proto__ = ficha2
/* 

console.log(ficha.nome, ficha.sobrenome,',', ficha.idade,',', ficha.sexo,',', ficha.vacinado)

for(let i in ficha) {
  console.log(i)
} */

const ficha3 = {
  nome: 'Luccas',
  show() {
    return `${this.nome}:${ficha.change()}`
  }
}

const fichaProto = Object.setPrototypeOf(ficha, ficha3)

console.log(ficha3.show());