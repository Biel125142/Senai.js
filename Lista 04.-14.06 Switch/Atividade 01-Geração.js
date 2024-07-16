/* Criar um programa onde o usuário digite o ano de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/

let AnoQueNasceu = Number(prompt('Digite qual ano que nasceu '))

    switch(true){

        case AnoQueNasceu <= 1945:
         alert('Você não tem geração definida.')
        break

        case AnoQueNasceu >=1946 && AnoQueNasceu <= 1964:
         alert('Você faz parte da geração Baby Boomers')
        break

        case AnoQueNasceu >= 1965 && AnoQueNasceu <= 1980:
         alert('Você faz parte da geração X')
        break

        case AnoQueNasceu >=1981 && AnoQueNasceu <=1996:
         alert('Você faz parte da geração Y ou Millenials')

        case AnoQueNasceu >= 1997 && AnoQueNasceu <=2010:
         alert('Voce faz parte da geração Z')
        break 

        case AnoQueNasceu >= 2011:
         alert('Você faz parte da Geração Alfa')
        break
    
    default:
        alert('Você digitou algo errado. Refaça.')
    break

}