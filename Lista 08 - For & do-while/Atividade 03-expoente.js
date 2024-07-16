// 3) Fazer um programa no qual o usuário deve digitar um número e o expoente dele.
//  Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).

let listaNumeros = []
for(i=0; i<10; i++){
    let numero = Number(prompt('Digite um número de 0 a 50'))
    if(numero >= 0 && numero <= 50){
        listaNumeros.push(numero)
    }
}
let maiorNumero = listaNumeros[0]
let base = Number(prompt('Digite o valor da base: '))
let expoente = Number(prompt('Digite o valor do espoente: '))
let resultado = base

for(i=0 ; i < expoente-1; i++){
    resultado = resultado * base
}
alert(`${base}^${expoente}=${resultado}`)
