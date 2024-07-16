// 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. 
// Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

// A) Ataque Bomba -100HP
// B) Ataque Granada -80HP
// C) Ataque Arqueiro -40HP
// D) Defesa Escudo +20HP

// Mostrar o HP do castelo atualizado a cada rodada. 
// Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!"

let rodadas = 0
let vidaCastelo = 500

while (vidaCastelo > 0) {
    let escolha = prompt(`Escolha entre: \n
        A) Ataque Bomba -100HP \n
        B) Ataque Granada -80HP \n
        C) Ataque Arqueiro -40HP \n
        D) Defesa Escudo +20HP \n
    `)
//(toUpper) comando que dixa o valor em maiusculo
    switch (escolha.toUpperCase()) {
        case "A":
            vidaCastelo -= 100
            rodadas++
            break
        case "B":
            vidaCastelo -= 80
            rodadas++
            break
        case "C":
            vidaCastelo -= 40
            rodadas++
            break
        case "D":
            vidaCastelo += 20
            rodadas++
            break    
        default:
        alert("Escolha inválida")
    }
    console.log(`Vida do castelo: ${vidaCastelo} \n Rodadas: ${rodadas}`)

}