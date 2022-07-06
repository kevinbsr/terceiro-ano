const carro = {
  modelo: 'Jeep',
  valor: 300.0,
  alarme: false,
  proprietario: {
    nome: 'Kevin',
    idade: 18,
    endereco: {
      rua: 'Maria da Conceição',
      numero: 49
    }
  },
  condutores: [
    {
      nome: 'Rafael',
      idade: 18
    },
    {
      nome: 'Andressa',
      idade: 44
    }
  ],
  ligarAlarme: function () {
    this.alarme = true
  },
  desligarAlarme: function () {
    this.alarme = false
  }
}

//console.log(carro);
console.log(carro.proprietario.endereco.rua)
console.log(carro.condutores.length);