/*5) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia.
 Um número primo é aquele que é divisível apenas por um e por ele mesmo.
 Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.*/

 let numeroDigitado
 let contador = 1
 let numeroPrimo = true

 numeroDigitado = Number(prompt('Digite um numero para verificar se é primo: '))

 while(contador <= numeroDigitado){

     if(contador > 1 && contador < numeroDigitado){

        if(numeroDigitado % contador == 0){

            numeroPrimo = false

        }

    }

    contador++

    if(numeroPrimo == false && numeroPrimo == 1){
        alert('Numero não é primo!')

    }else{
        alert('Numero é primo')
    }

 }