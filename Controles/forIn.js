const notas = [7.7,6.7,6.5,8.8,9.4]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Lucas',
    sobrenome: 'Fernandes',
    idade: 25,
    peso: 87.56
}

for(let atributo in pessoa){
    console.log (`${atributo} = ${pessoa[atributo]}`)
}