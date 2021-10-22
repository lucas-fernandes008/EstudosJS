function getNumeroAleatorio(max,min){
    const valor = Math.random() *(max - min) +min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getNumeroAleatorio(-1, 25)
    console.log('A opção escolhida foi '+opcao)
}while(opcao != -1)
console.log('Fim do sorteio')