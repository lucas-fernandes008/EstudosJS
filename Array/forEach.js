const aprovados = ['Lucas', 'João','Pedro','Kiara','Ayla','Duda']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}` )
})

aprovados.forEach(nome => console.log(nome))