const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

const funcionarioMulher = funcionario => funcionario.genero === 'F'
const funcionarioPais = funcionario => funcionario.pais === 'China'
const funcionarioMenorSalario = (funcionario,funcionarioAtual) =>{
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
    // a linha acima remete a uma operação if, "se o salario do funcionario for menor que o do
    //funcionário atual, retorna funcionario, senão retorna o funcionário atual"
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios.filter(funcionarioMulher).filter(funcionarioPais).reduce(funcionarioMenorSalario))
})

//desafio: buscar qual a mulher chinesa de menor salário