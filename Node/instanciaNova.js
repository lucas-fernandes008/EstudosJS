// usando factory para instanciar um objeto

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}