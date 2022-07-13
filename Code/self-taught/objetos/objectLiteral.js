// Object Literal

const microfone = {
  color: 'black',
  isOn: true,
  toggleOnOff: function () {
    if (microfone.isOn) {
      console.log('desligar')
    } else {
      console.log('ligar')
    }
    microfone.isOn = !microfone.isOn
  }
}

console.log(microfone)
/* microfone.toggleOnOff()
microfone.toggleOnOff() */
