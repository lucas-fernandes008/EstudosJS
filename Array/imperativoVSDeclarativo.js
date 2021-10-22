const alunos = [
    {nome: 'Lucas',nota: 10},
    {nome: 'João',nota: 8.7}
]

//Abordagem imperativa
let total1 = 0
for(let i=0; i<alunos.length; i++){
    total1 = total1 + alunos[i].nota
}
console.log(total1/alunos.length)


//Abordagem declarativa
const getNota = aluno => aluno.nota
const soma = (total,atual) => total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)