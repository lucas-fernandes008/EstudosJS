const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//forma síncrona

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//forma assíncrona

fs.readFile(caminho,'utf-8', (err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//lendo conteudos de pasta
fs.readdir(__dirname,(err, arquivos)=>{
    console.log('Arquivos da pasta')
    console.log(arquivos)
})