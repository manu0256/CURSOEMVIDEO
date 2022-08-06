/* Código do Curso em vídeo
var agora = new Date() ;
var  diaSem = agora.getDay() ;
/* 0- domingo
1- segunda
2-terça
...

console.log(diaSem)

switch(diaSem) {
    case 0 :
        console.log('Domingo')
        break
        case 1 :
            console.log('Segunda')
            break
            case 2 :
                console.log('Terça')
                break
                case 3 :
                    console.log('Quarta')
                    break
                    case 4 :
                        console.log('Quinta')
                        break
                        case 5 :
                            console.log('Sexta')
                            break
                            case 6 :
                                console.log('Sábado')
                                break
                            default :
                                console.log('[ERRO] DIA INVÁLIDO!')                 
}
*/

//Meu código 
var agora = new Date() ;
var diaSem = agora.getDay() ;
var documentoHtml = window.document.getElementById('div1') ;
documentoHtml.innerText += `${diaSem}` ;

switch (diaSem) {
    case 0 : 
    documentoHtml.innerText =('domingo')
    break
    case 1 :
        documentoHtml.innerText= ( 'segunda')
        break
        case 2 :
            documentoHtml.innerText= ('terça')
            break
            case 3 :
                documentoHtml.innerText= ('quarta')
                break
                case 4 :
                    documentoHtml.innerText= ('quinta')
                    break
                    case 5 :
                        documentoHtml.innerText= ('sexta')
                        break
                        case 6 :
                            documentoHtml.innerText= (' sábado')
                            break


}

