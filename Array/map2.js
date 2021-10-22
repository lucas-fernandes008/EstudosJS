const carrinho = [
    '{"nome": "Borracha", "preco": 1.50 }',
    '{"nome": "lápis", "preco": 1.50 }',
    '{"nome": "estojo", "preco": 7.50 }',
    '{"nome": "caderno", "preco": 12.80 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
