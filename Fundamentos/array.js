const valores = [7.7,8.9,7.6];
console.log(valores[0,1])

valores[3]= 10
valores[4]= 20
console.log(valores)
console.log("Tamanho do array= " +valores.length)
valores.push({id: 3}, null, 'Lucas')
console.log(valores)
console.log("Tamanho do array= " +valores.length)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)