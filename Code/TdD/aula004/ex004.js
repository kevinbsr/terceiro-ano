var myObj = new Object()
var str = 'myString'
var aleatorio = Math.random()
var obj = new Object()

console.log(myObj, str, aleatorio, obj)
myObj.tipo = 'exemplo de valor para atributo'
myObj['atributo'] = 'valor de atributo'
myObj[str] = 'valor de string'
myObj[aleatorio] = 'valor de aleatorio'
myObj[obj] = 'object'

console.log(myObj)
