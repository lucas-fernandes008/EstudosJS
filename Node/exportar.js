console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 10
exports.b = 20
module.exports.c = 30

exports = null
console.log(module.exports)

module.exports = {publico : true}