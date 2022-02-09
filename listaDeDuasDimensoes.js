//              [0]      [1]       [2]      [3]  
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

//                      [0][1][2][3]
const mediasDosAlunos = [10, 7, 9, 6]

//                         [0]    [1]  
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`${listaDeNotasEAlunos [0][0]}, sua média é ${listaDeNotasEAlunos [1][0]}`)