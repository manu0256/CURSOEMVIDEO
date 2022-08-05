/*
//Como o Guanabara nos passou o conteúdo (condição aninhada pt.2)
var idade = 22
  console.log(`Você tem ${idade} anos.` ) //console.log sfunciona no node.js
if (idade < 16 ) {
    console.log('Então você não vota')
} else  if (idade <  18 || idade > 65) {
        console.log('Então o seu voto é opcional!')
} else {
    console.log('O seu voto é obrigatório!')
} */
 
//Minha resolução
var documentHTML = window.document.getElementById('corpo') ;
var idade = Number(window.prompt('Digite a sua idade:' )) ;
documentHTML.innerText += `Você tem ${idade} anos.` 
if ( idade < 16 ) {
    documentHTML.innerText += 'Você não vota.'
}else if (idade < 18 || idade > 65) {
    documentHTML.innerText += 'Seu voto é opcional'
}else {
    documentHTML.innerText += 'Seu voto é obrigatório'
}