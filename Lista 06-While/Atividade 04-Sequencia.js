
/* Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. 
Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
 Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".*/    


let sequenciaDigitada;
let numeroEsperado = 10;

sequenciaDigitada = Number(prompt('Digite a sequência de números de 1 a 10, invertida (começando do 10 até o 1):'));

while (numeroEsperado >= 1) {
    if (sequenciaDigitada !== numeroEsperado) {
        alert('Você errou a sequência.')
        break
    }

    if (numeroEsperado === 1) {
        alert('Você terminou a sequência corretamente.')
    } else {
        sequenciaDigitada = Number(prompt(`Digite o próximo número (${numeroEsperado - 1} esperado):`))
    }

    numeroEsperado--
}

