const lista = []

let maiorNumero = lista[0]
let menorNumero = lista[0]

for (i = 0; i < lista.length; i++) {
    lista = Number(prompt('Digite numeros de 0 a 50'))
  if (lista[i] > maiorNumero) {
    maiorNumero = lista[i];
  } else if (lista[i] < menorNumero) {
    menorNumero = lista[i];
  }
}

console.log("Maior número:", maiorNumero);
console.log("Menor número:", menorNumero);