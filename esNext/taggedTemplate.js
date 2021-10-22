//tagged Template = processar uma template String dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Lucas'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)