//sem promisse

const http = require('http')

const getTurma = (letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res => {
        let resultado = ''

        res.on('data', dados =>{
            resultado +=dados  //concatenando o resultado do get da url na variável Resultado
        })

        res.on('end', ()=>{
            callback(JSON.parse(resultado)) //transformando JSON em objeto
        })
    })
}

let nomes = []
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a=> `C: ${a.nome}`))
            console.log(nomes)
        })
    })

})