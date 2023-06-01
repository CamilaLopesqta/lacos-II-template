// --------------- PRÁTICA GUIADA ---------------
// MÉDIA E SOMA DAS NOTAS
let bimestre1 = [5, 5, 5, 5]
let bimestre2 = [7, 7, 7, 7]
let bimestre3 = [9, 9, 9, 9]
let bimestre4 = [10, 10, 10, 10, 10]

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

//console.table(notasDoAno)

for (let indiceBimestre = 0; indiceBimestre < notasDoAno.length; indiceBimestre++){
    let soma = 0

    for (let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){
      soma = soma + notasDoAno[indiceBimestre][indiceNota]

    }
//console.log("soma do bimestre", soma)
    
    let mediaBimestre = soma / notasDoAno[indiceBimestre].length
    
    //console.log(mediaBimestre);
    //console.log(`A soma das notas do bimestre ${indiceBimestre + 1} é: ${soma} \n A média do bimestre ${indiceBimestre + 1} é ${mediaBimestre}`);
  }

// FOR... IN
for (let indiceBimestre in notasDoAno){
    let soma = 0

    for (let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){
      soma = soma + notasDoAno[indiceBimestre][indiceNota]

    }
//console.log("soma do bimestre", soma)
    
    let mediaBimestre = soma / notasDoAno[indiceBimestre].length
    
    //console.log(mediaBimestre);
    //console.log(`A soma das notas do bimestre ${Number(indiceBimestre) + 1} é: ${soma} \n A média do bimestre ${Number(indiceBimestre) + 1} é ${mediaBimestre}`);
  }

// FOR... OF
for (let indiceBimestre in notasDoAno){
  let soma = 0

  for (let nota of notasDoAno[indiceBimestre]){
    soma = soma + nota

  }
//console.log("soma do bimestre", soma)
  
  let mediaBimestre = soma / notasDoAno[indiceBimestre].length
  
  //console.log(mediaBimestre);
  //transformando indiceBimestre em Number pq vem como string
  //console.log(`A soma das notas do bimestre ${Number(indiceBimestre) + 1} é: ${soma} \n A média do bimestre ${Number(indiceBimestre) + 1} é ${mediaBimestre}`);
}

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
//for(let i = 0; i <= filmes.length; i++){
   //console.log(filmes)
//console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  //  for(let j = 0; j <= filmes[i].elenco.length; j++){
  //    console.log(`Ator/Atriz: ${filmes[i].elenco}`);
    //}
//}
//for in
//for(let i in filmes){
  //console.log(filmes)
//console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
   //for(let j = 0; j <= filmes[i].elenco.length; j++){
//     console.log(`Ator/Atriz: ${filmes[i].elenco}`);
   //}
//}
for(let i in filmes){
  //console.log(filmes)
console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
   for(let atores of filmes[i].elenco){
     console.log(`Ator/Atriz: ${atores}`);
   }
}