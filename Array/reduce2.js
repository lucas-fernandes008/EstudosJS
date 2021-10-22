const alunos = [
    {nome: 'Lucas', nota: 7.8, bolsista: false},
    {nome: 'Maria', nota: 9.4, bolsista: true},
    {nome: 'João', nota: 8.5, bolsista: true},
    {nome: 'Ana', nota: 6.5, bolsista: false}
]

//Verificação se todos os alunos do array são bolsistas
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a =>a.bolsista).reduce(todosBolsistas))

//Verificação se algum aluno é bolsista
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))