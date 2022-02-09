const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vívian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Deisy', 'Camilo']

 const sala1 = nomes.slice(0, nomes.length/2)
 const sala2 = nomes.slice(nomes.length/2)

 console.log (`Tamanho dessa arrey: `, nomes.length)
 console.log(`Alunos da sala 1: ${sala1}`)
 console.log(`Alunos da sala 2: ${sala2}`) //Quando só passa um dos parametros ele considera que é o do início e vai até o final 