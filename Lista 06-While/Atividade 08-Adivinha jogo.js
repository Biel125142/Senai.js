/*8) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto).
 Em seguida deve ser perguntado qual número imagina-se que seja o número secreto.
  A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". 
  Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.
 (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor)*/


 let min = 0
 let max = 101
 let numeroSecreto
 let numeroPalpite
 let quantidadePalpites = 0

 //FORMULA  Math.floor(Math.random() * (MAX - MIN) + MIN)

 numeroSecreto = Math.floor(Math.random() * (101 - 0) + 0)

 while(numeroPalpite != numeroSecreto){

    numeroPalpite = Number(prompt('Digite um palpite (0-100)'))
    quantidadePalpites++

        if(numeroPalpite < numeroSecreto){

            alert('O numero secreto é maior!')

        }
        else if( numeroPalpite > numeroSecreto){

            alert('O numero secreto é menor!')

        }else{
            alert(`PARABENS! Você acertou! Quantidade de palpites é: ${quantidadePalpites} `)
        }

 }