const caixaDeEntrada = [
    {
        id: 0,
        titulo: "email0",
        assunto: "assunto0",
        lido: true
    },

    {
        id: 1,
        titulo: "email1",
        assunto: "assunto1",
        lido: false
    },

    {
        id: 2,
        titulo: "email2",
        assunto: "assunto2",
        lido: false
    }
]

function marcarTodosComoLido (){
    const marcados = caixaDeEntrada.map(elem => {
        return {...elem, lido:true, assunto:'besteira'}

    })
    return marcados
}

console.log('marcados', marcarTodosComoLido())
console.log('caixaDeEntrada', caixaDeEntrada)