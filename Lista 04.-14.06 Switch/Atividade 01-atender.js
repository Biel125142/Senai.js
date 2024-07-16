/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente       D) Sair*/

let opcaoEscolhida

opcaoEscolhida = prompt('a) Falar com a atendente  \nb) Falar com o RHC  \nc) Falar com o gerente  \nd) Sair').toLowerCase()

switch (opcaoEscolhida){

    case 'a':
    alert('Você escolheu a opção de falar com a atendete')
    break

    case 'b':
    alert('Você escolheu a opção de falar com o RHC')
    break
    
    case 'c': 
    alert('Você escolheu a opção de falar com o gerente')
    break

    case 'd': 
    alert('Você escolheu a opção de sair')
    break
                    }


