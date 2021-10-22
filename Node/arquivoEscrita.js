const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1450.99,
    desconto: 0.15
}

fs.writeFile(__dirname+ '/arquivoGerado.json',JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo')
})
/* Método para persistência dos dados do objeto produto no disco
   o método transforma o objeto em Json e escreve ele em um arquivo chamado arquivoGerado*/