/*2) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito
 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela.
  Na opção saldo, apenas mostrar o saldo atual na tela. 
Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.*/

let NumeroConta = 125141
var saldoNaConta = 8000

var NumeroDigitado = Number(prompt('Digite o numero da sua conta bancaria: '))

if (NumeroDigitado === NumeroConta){
var operacao= Number(prompt('Qual tipo de operação deseja realizar?\n1) Saldo\n2) Depósito\n3) Saque'))
}else {
    alert('Numero da conta não encontrado')
}

switch(operacao){
    case 1:
     alert(`Saldo na conta: ${saldoNaConta}`)
    break

    case 2:
var Depositar = Number(prompt('Digite o valor que deseja depositar: '))
     saldoNaConta = Depositar + saldoNaConta
     alert(`Deposito efetuado com sucesso. Saldo atual: ${saldoNaConta}`)
     break

    case 3:
var saque = Number(prompt('Digite o valor que deseja sacar: '))
     saldoNaConta = saldoNaConta - saque
     alert(`Saque efetuado com sucesso. Saldo atual: ${saldoNaConta}`)
    break
    
default:
    alert('Você digitou algum numero errado.')
}
