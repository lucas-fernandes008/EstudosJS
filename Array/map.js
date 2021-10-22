const nums = [1,2,3,4,5]

//função map é um forEach com propósito

let resultado = nums.map(function(e){
    return e*2
})

console.log(nums)
console.log(resultado)

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro= e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`