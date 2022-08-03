
var nome = window.prompt('Qual é o seu nome?');
document.open();
document.write(` Olá ${nome} seu nome possui ${nome.length} letras.`);
document.write( ` Seu nome em Maiúsculas é ${nome.toUpperCase()}. ` );
document.write(` Seu nome em minúscula é ${nome.toLowerCase()}. ` );
document.close();