employeesList = require('./funcionarios.json')

country = c => c.pais
console.log(employeesList.map(country));

usa = usa => usa.pais == 'United States'
us = employeesList.filter(usa)

fem = fem => fem.genero == 'F'
womenUS = us.filter(fem)
console.log(womenUS);

higherWage = womenUS.reduce((higher, current) => higher.salario > current.salario ? higher : current)
console.log(`A mulher com o maior salário dos EUA é ${higherWage.nome} com um salário de U$ ${higherWage.salario}.`)

wageFilter = womenUS.map(wage = wage => wage.salario)
totalWageUS = wageFilter.reduce((acc, cur) => acc + cur)
console.log(`O total de salários a serem pagos nos EUA é de U$ ${totalWageUS}.`);