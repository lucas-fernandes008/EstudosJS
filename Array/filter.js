const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4200, fragil: true},
    {nome: 'copo de vidro', preco: 7.80, fragil: true},
    {nome: 'copo de plástico', preco: 2.50, fragil: false}
]

const produtosFrageis = produto => produto.fragil == true
const produtosCaros= produto => produto.preco >= 500

console.log(produtos.filter(produtosFrageis).filter(produtosCaros))

