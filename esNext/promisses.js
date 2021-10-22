const { reject } = require("lodash");

function falandoDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos *1000)
    })

}

falandoDepoisDe(3,'Que Legal, a promise está funcionadno')
    .then(frase => frase.concat('!?!?'))
    .then(outraFrase => console.log(outraFrase))