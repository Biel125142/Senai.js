/* 1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos.
 O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar).
 Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

 let moedaUm = 0
 let moedaCinco = 0
 let moedaDez = 0
 let moedaVinteCinco = 0
 let moedaCinquenta = 0
 let moedaColocada 
 let soma = 0

    // moedaColocada = Number(prompt('°Digite qual moeda irá incerir no cofrinho: \n°O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. '))

 while(moedaColocada != 0){

    moedaColocada = Number(prompt('°Digite qual moeda irá inserir no cofrinho: \n°O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. '))

        if(moedaColocada == 1 || moedaColocada == 5 ||moedaColocada == 10 || moedaColocada == 25 ||moedaColocada == 50|| moedaColocada == 0){
            soma+=moedaColocada
        }else {
            alert('Você digitou algo errado')
            break
        }

            if(moedaColocada == 1){

                moedaUm++

            }
            else if(moedaColocada == 5){

                moedaCinco++
                
            }
            else if(moedaColocada == 10){

                moedaDez++
                
            }
            else if(moedaColocada == 25){

                moedaVinteCinco++
                
            }
            else if(moedaColocada == 50){

                moedaCinquenta++
                
            }

            
        if(moedaColocada == 0 ){
            alert(`Valor total: ${soma} \n1 centavo: ${moedaUm}\n5 centavo: ${moedaCinco}\n10 centavos: ${moedaDez}\n25 centavos: ${moedaVinteCinco}\n50 centavos:: ${moedaCinquenta} `)
        }
    

 }

