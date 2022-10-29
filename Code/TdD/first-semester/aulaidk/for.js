const metade = (z)=> z/2

for(var y=0, x=0; y < metade(x);y++, y--){
  console.log(`valor de x: ${x} e valor de y: ${y}`)
}

// Utilizando um array

const valores = [7.0, 3.1, 4.4, 9.8, 20.7, 3.3]
for (let i = 0; i < valores.length; i++){
  console.log(`${i+1} valores: ${valores[i]}`)
}