const listaDeChamada = ['JoÃ£o', 'Ana', 'Caio', 'Lara', 'Marjorie', 'LÃ©o']

//Ana e Caio mudaram de escola e Rodrigo entrou na turma

listaDeChamada.splice(1,2,'Rodrigo')
listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)

animaisDoAquario = ['ð', 'ð', 'ð¬', 'ð¦']

animaisDoAquario.splice(1,0,'ð ')
animaisDoAquario.splice(3,2,'ð')

console.log(animaisDoAquario)