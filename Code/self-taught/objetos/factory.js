// Factory

function createMicrofone(color) {
  let isOn = true

  function toggleOnOff() {
    if (isOn) {
      console.log('desligar')
    } else {
      console.log('ligar')
    }
    isOn = !isOn
  }

  return { color, toggleOnOff }
}

const microfoneBlack = createMicrofone('black')
/* console.log(microfoneBlack.color)
const microfoneWhite = createMicrofone("white")
console.log(microfoneWhite.color)
*/
console.log(microfoneBlack)
