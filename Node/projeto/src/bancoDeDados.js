const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id= sequence.id
    produtos[produto.id]= produto
    return produto
}

function excluirProduto(id){
    const produto = produto[id]
    delete produto[id]
    return produto
}

function getProdutoById(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}




module.exports= {salvarProduto,getProdutoById,getProdutos}