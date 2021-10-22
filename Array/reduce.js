const alunos = [
    {nome: 'Lucas', nota: 7.8, bolsista: false},
    {nome: 'Maria', nota: 9.4, bolsista: true},
    {nome: 'João', nota: 8.5, bolsista: true},
    {nome: 'Ana', nota: 6.5, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador+atual
})

// A função reduce soma os valores que são lidos no array
// Neste caso, a função soma as notas acumuladas