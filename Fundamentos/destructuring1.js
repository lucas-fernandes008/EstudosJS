const pessoa ={
    nome: 'José',
    idade: 16,
    endereco:{
        rua: 'Marechal Deodoro',
        numero: 457
    }
}

const {nome, idade} = pessoa //operador destructuring
console.log(nome, idade)

const{sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)