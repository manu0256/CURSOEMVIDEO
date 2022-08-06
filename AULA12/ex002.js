// Minh solução
var docthtml = window.document.getElementById('div1') ;
var agora = new Date() ;
var hora = agora.getHours() ;
var minutos = agora.getMinutes() ;
docthtml.innerText += `Agora são exatamente ${hora} horas e ${minutos} minutos.` ;
if (hora < 12 ) {
    docthtml.innerText += 'Bom dia!' ;
} else if (hora <= 18) {
    docthtml.innerText += 'Boa tarde!' ;
} else {
    docthtml.innerText += 'Boa noite!' ;
}
/* soluçção dada pelo professor
var agora= new Date() 
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas´)
f (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora<=18){
    console.log(`Boa tarde!`)
} else {
    console.log('Boa noite')
} */