const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']

//Ana e Caio mudaram de escola e Rodrigo entrou na turma

listaDeChamada.splice(1,2,'Rodrigo')
listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)