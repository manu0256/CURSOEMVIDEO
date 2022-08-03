var n1 = Number.parseFloat( window.prompt('Digite um número!')) ;   //declaração de que o objeto digitado no prompt é um ponto flutuante   
var n2 = Number.parseFloat(window.prompt('Digite outro número!')) ; //declaração de que o objeto digitado no prompt é um ponto flutuante
var s = n1 + n2 ; //variável que armazena os dois valores n1 e n2
//window.alert("A soma dos valores é " + s ) ; //concatenação 
/*converter number para string:
window.alert("A soma dos valores é " + String(s )) */
//var n1 = Number.parseFloat(window.prompt('Digite um número! '));  //declaração de que o objeto digitado no prompt é um ponto flutuante 
//var n2 = Number.parseFloat(window.prompt('Digite outro número! ')) ; //declaração de que o objeto digitado no prompt é um ponto flutuante 
//var s = n1 +n2 ; //variável que armazena dos valores n1 e n2
window.alert( `a soma entre os valores ${n1} e  ${n2} é igual a ${s}` ) //  template string. cifrão seguido de chaves(placeholder).