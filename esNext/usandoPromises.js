//com promisse

const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
         http.get(url, res => {
        let resultado = ''

        res.on('data', dados =>{
            resultado +=dados  //concatenando o resultado do get da url na variável Resultado
        })

        res.on('end', ()=>{
            try{
                resolve(JSON.parse(resultado)) //transformando JSON em objeto
            } catch(e){
                reject(e)
            }
        })
      })
    })
}

/*let nomes = []
getTurma('A').then(alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a=> `C: ${a.nome}`))
            console.log(nomes)
        })
    })

})*/

Promise.all([getTurma('A'),getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) //colocando os elementos em um único array
    .then(alunos => alunos.map(aluno => aluno.nome)) //utilizando a função MAP para retornar só nomes
    .then(nomes => console.log(nomes)) //imprimindo nomes na tela