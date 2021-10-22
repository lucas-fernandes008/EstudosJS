//Operador ...rest(juntar),spread(separar)

//usar spread com objetos
const funcionario = {nome: 'Lucas', salario: 1450.76}
const funcionarioClone = {ativo: true, ...funcionario}
console.log(funcionarioClone)

//usar o spread com arrays

const grupoA = ['Jonatham','Maria','João']
const grupoFinal = ['Lucas', 'Ayla', ...grupoA]