const escola =[{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.5
    },{
        nome: 'Ana',
        nota: 7.8
    }]
},{
    nome: 'Turma B',
    alunos: [{
        nome: 'Lucas',
        nota: 9.7
    },{
        nome: 'Aline',
        nota: 8.8
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)