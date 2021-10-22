function tratarErroELancar(erro){
    throw new Error('...')
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    } catch(e){
        tratarErroELancar(e)
    }
    
}

const obj = {nome: 'Lucas'}
imprimirNomeGritando(obj)