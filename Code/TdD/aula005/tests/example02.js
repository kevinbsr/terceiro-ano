const form = {
  name: 'Kevin',
  age: 18,
  change(newName) {
    this.name = newName
  }
}

const form2 = {
  lastName: 'Benevides',
  gender: 'male',
  vaccinated: true,
  changeAge(newAge) {
    this.age = newAge
  },
  changeVaccine() {
    this.vaccinated = !this.vaccinated
  }
}

form.__proto__ = form2

console.log(`Name: ${form.name} ${form.lastName} \nAge: ${form.age}\nGender: ${form.gender} \nVaccinated? ${form.vaccinated}\n`)

form.change('Pedro')
form.changeAge(2)
form.changeVaccine()

console.log(`Name: ${form.name} ${form.lastName} \nAge: ${form.age}\nGender: ${form.gender} \nVaccinated? ${form.vaccinated}\n`)

const form3 = {
    changeFirstAttribute(newName) {
        this.name = newName
      },
      showFirstAttribute() {
          this.change('Gabriel')
          this.changeAge(5)
          return `Name: ${this.name} ${this.lastName} \nAge: ${this.age}\nGender: ${this.gender} \nVaccinated? ${this.vaccinated}\n`
        }
      }

Object.setPrototypeOf(form3, form)

form3.changeFirstAttribute('Luccas')

console.log(form3.showFirstAttribute())

const form4 = Object.create(form)

form4.skinColor = 'White'
form4.name = 'Luísa'
form4.age = 18
form4.lastName = 'Mathias'
form4.changeVaccine()
form4.gender = 'Female'

console.log(`Name: ${form4.name} ${form4.lastName} \nAge: ${form4.age} \nGender: ${form4.gender} \nSkin Color: ${form4.skinColor} \nVaccinated? ${form4.vaccinated} `)