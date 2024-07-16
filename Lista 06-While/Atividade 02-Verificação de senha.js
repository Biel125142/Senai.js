/*2) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.*/

let senhaUsuario = 'papa123'
let senhaRepetir = senhaUsuario
let senhaDigitadaUm
let senhaDigitadaDois

    senhaDigitadaUm = prompt("Digite a senha do usuario: ")
    senhaDigitadaDois = prompt("Repita a senha do usuario: ")

while(senhaDigitadaUm == senhaUsuario && senhaDigitadaDois == senhaRepetir){
    
    senhaDigitadaUm = prompt("Digite a senha do usuario: ")
    senhaDigitadaDois = prompt("Repita a senha do usuario: ")
}

