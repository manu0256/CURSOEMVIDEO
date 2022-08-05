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