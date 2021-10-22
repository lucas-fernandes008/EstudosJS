const contadorA = require('./instanciaUnica') 
const contadorB = require('./instanciaUnica')
//O require da instancia única faz cache, ou seja quando chamado a função de incremento tanto
// para o contadorA ou contadorB irá mudar para ambos.

const contadorC= require('./instanciaNova')()
const contadorD= require('./instanciaNova')()
//Para o contadorC e contadorD, por serem instanciados por uma função factory, eles terão instâncias próprias
//Logo, o que for incrementado em um não irá afetar o outro.

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)