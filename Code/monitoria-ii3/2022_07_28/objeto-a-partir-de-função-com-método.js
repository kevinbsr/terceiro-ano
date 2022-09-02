const calcular = (valor1, operador, valor2) => {
  operador == "~" && valor2 == undefined ? (valor2 = 2) : (valor2 = valor2);
  if (ehNumero(valor1) && ehNumero(valor2)) {
       switch (operador) {
            case "+":
                 console.log( "valor 1 ",  valor1,  " + valor 2 ", valor2, " = ",  valor1 + valor2, "\n"  );
                 return console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
                 break;
            case "-":
                 return console.log( `${valor1} - ${valor2} = ${valor1 - valor2}`);
                 break;
            case "*":
                 return console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`);
                 break;
            case "/":
                 return console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
                 break;
            case "^":
                 return console.log(`${valor1} ^ ${valor2} = ${valor1 ** valor2}`);
                 break;
            case "~":
                 return console.log(`Raiz (${valor1},${valor2}) = ${valor1 ** (1 / valor2)}`);
                 break;
            default:
                 return "operador inadequado";
       }
  } else {
       return "O valor informado não é número";
  }
};

const ehNumero = (x) => {
  return isNaN(x) ? false : true;
};

calcular(64, "*", 8)