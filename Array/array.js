let aprovados = new Array('Lucas', 'Paulo', 'Kiara')
console.log(aprovados)

aprovados = ['João','Maria','José']
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Chico'
aprovados.push('Carmen')
console.log(aprovados.length)

aprovados[9]= 'Danilo'
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['João', 'Lucas', 'Samira']
aprovados.splice(1,2, 'Sukita','Chablau')
console.log(aprovados)