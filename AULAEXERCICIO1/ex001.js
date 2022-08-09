function carregar() {
var msg = window.document.getElementById("msg") ;
var img = window.document.getElementById('img') ;
var agora = new Date () ;  
var hora = 20//agora.getHours() ;
var minutosDia = agora.getMinutes() ;
msg.innerText = `Agora são ${hora} horas e ${minutosDia}.`

if (hora >= 0 && hora < 12) {
    img.src = './images/pexels-invisiblepower-296559(1).png' ;
    document.body.style.background = '#0223' 
} else if (hora >= 12 && hora <= 18){ 
    img.src = './images/pexels-nihat-69224.png' ;
    document.body.style.background = '#48101' ;
} else {
    img.src = './images/pexels-dominika-roseclay-977736.png' ;
    document.body.style.background = '#606070'
} 
}   

