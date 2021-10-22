const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res,next)=>{     //função middleware, requisição, resposta e next
    res.send(bancoDeDados.getProdutos()) //Objeto será convertido para JSON
}) 

app.get('/produtos/:id', (req, res,next)=>{
    res.send(bancoDeDados.getProdutoByID(req.params.id))
})

app.post('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,

    })
    res.send(produto) //Objeto gerado será transformado em JSON
})

app.delete('/produtos/:id', (req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Objeto gerado será transformado em JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})