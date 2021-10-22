Array.prototype.map2 = function(callback){
    const newArray =[]
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    } return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 1.50 }',
    '{"nome": "lápis", "preco": 1.50 }',
    '{"nome": "estojo", "preco": 7.50 }',
    '{"nome": "caderno", "preco": 12.80 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)