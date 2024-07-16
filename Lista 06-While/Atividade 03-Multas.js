/*3) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais
 e os pontos perdidos na carteira de habilitação. 
Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”,
 senão, exibir “Você está regular”.*/

 var numerosMulta
 var valorReais = 0
 var pontosPerdidos = 0
 var i =0


    numerosMulta = Number(prompt('Digite a quantidade de vezes que deseja cadastrar'))

 while(i < numerosMulta){

    valorReais = Number(prompt('Digite o valor em reais da multa: ')) + valorReais
    pontosPerdidos = Number(prompt('Digite a quantidade de pontos perdidos: ')) + pontosPerdidos
    i++

 }

 if(pontosPerdidos >= 21){

    alert("Você está irregular \n Sua multa é de: " + valorReais + "\n seus pontos atuais é de: " + pontosPerdidos)

 }else {

    alert('Você está regular \n Sua multa é de: ' + valorReais + "\n seus pontos atuais é de: " + pontosPerdidos)
 }

