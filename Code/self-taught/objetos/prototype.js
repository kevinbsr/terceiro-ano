// Prototype

function Microfone(color = "black") {
  this.color = color
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
const microfone2 = new Microfone("white")

console.log(microfone);
console.log(microfone2);