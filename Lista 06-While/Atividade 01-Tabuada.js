/*1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.*/

let numeroDigitado = Number(prompt('Digite um numero: '))
let contador = 0
let valorMultiplicado 
let multiplicação = 0

while(contador < 10){

    multiplicação++
    contador++
    valorMultiplicado = numeroDigitado * multiplicação
    

    alert(`Tabuada do numero selecionado: ${numeroDigitado} x ${multiplicação} = ${valorMultiplicado}`)
}