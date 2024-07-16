/*Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número.
 Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7.
 Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.*/

 /*Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano.
 Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".*/


 let mesDigitadoNumero = Number(prompt('Digite em forma de numero os dias da semana. (1 a 7)'))

 switch (mesDigitadoNumero){

    case 1:
        alert('Domingo')
    break

    case 2:
        alert('Segunda-Feira')
    break

    case 3:
        alert('Terça-Feira')
    break

    case 4:
        alert('Quarta-Feira')
    break

    case 5:
        alert('Quinta-Feira')
    break
    
    case 6:
        alert('Sexta-Feira')
    break

    case 7:
        alert('Sabado')
    break

    default:
        alert('Você digitou um numero que não tem na semana.')
    

 }



 