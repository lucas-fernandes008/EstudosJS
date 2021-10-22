// não aceita repetição e não é idexado

const times = new Set()
times.add('Corinthians')
times.add('Parmera').add('Sport').add('Santos').add('Inter').add('Gremio').add('Flamengo')
times.add('Sport')

console.log(times)
console.log(times.size) //ver tamanho do objeto
console.log(times.has('Santa Cruz')) //verifica se existe o elemento passado como parâmetro
times.delete('Flamengo')
console.log(times.has('Flamengo'))