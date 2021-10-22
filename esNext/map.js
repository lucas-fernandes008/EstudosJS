const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react) //forma errada
console.log(tecnologias.get('react'))//forma correta


const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [12345, 'Numero']
])

chavesVariadas.forEach((valor, chaves)=>{
    console.log(chaves, valor)
})

console.log(chavesVariadas.has(12345))
console.log(chavesVariadas.delete(12345))
console.log(chavesVariadas.has(12345))