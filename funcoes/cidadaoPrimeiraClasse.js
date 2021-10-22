//Criar função de forma Literal

function func1(){

}

//Armazenar em uma variável

const func2 = function(){}

//Armazenar em um array

const array1 = [function (a,b){return a+b}, func1,func2 ]
console.log(array1[0](2,3))

//Armazenar em um atributo

const obj = {}
obj.falar = function (){return 'opa'}
console.log(obj.falar())