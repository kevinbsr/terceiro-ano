funcionariosLista = require('./funcionarios.json')

pais = p => p.pais
console.log(funcionariosLista.map(pais));

usa = usa => usa.pais == 'United States'
us = funcionariosLista.filter(usa)

fem = fem => fem.genero == 'F'
mulheresUS = us.filter(fem)
console.log(mulheresUS);

mulherMaiorSalario = mulheresUS.reduce((s,sa) => s.salario > sa.salario?s:sa)
console.log(`A mulher com o maior salário dos EUA é ${mulherMaiorSalario}`);

filtrarSalarios = mulheresUS.map(sal = sal => sal.salario)
inicial = 0 
salarioTotalUS = filtrarSalarios.reduce((acumulado, atual) => acumulado + atual, inicial)
console.log(`O total de salários a serem pagos nos EUA é de U$ ${salarioTotalUS}`);