// ES8: Object.values/Object.entries

const obj1 = {a:1, b:2, c:3}
console.log(Object.values(obj1)) //retorna o valor atribuído aos itens
console.log(Object.keys(obj1))  // retorna a chave relacionada aos itens
console.log(Object.entries(obj1)) // retorna uma matriz com o conjunto de chave e valor

//Melhorias na notação literal

const nome = 'Lucas'
const pessoa = {
    nome,
    ola(){
        return 'Olá Mundo, bom dia!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Classe

class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Ele é u cachorrin fia da put'
    }
}

const cachorro1 = new Cachorro
console.log(cachorro1.falar())