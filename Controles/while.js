function getNumeroAleatorio (max,min){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao= getNumeroAleatorio(-1,15)
    console.log('A opção escolhida foi '+opcao) 
}

console.log('Fim do sorteio!')