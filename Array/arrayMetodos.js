const pilotos = ['Vettel', 'Alonso', 'Hamilton', 'Senna']

pilotos.pop() //remove o último elemento do array
console.log(pilotos)

pilotos.push('Schumacher') //adiciona o elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Senna')  //adiciona o elemento na primeira posição do array
console.log(pilotos)

// método splice pode adicionar ou remover elementos, de acordo com o que for disposto no método

//adicionando com splice
pilotos.splice(2,0,'Bottas') //adiciona o elemento Bottas a partir do índice 2 e não exclui nenhum elemento
console.log(pilotos)

//removendo com splice
pilotos.splice(1,1) //remove um elemento a partir do índice 1
console.log(pilotos)

const algunsPilotos = pilotos.slice(0,2) //copia os elementos do array pilotos para o novo array, no intervalo definido na função slice
console.log(algunsPilotos)