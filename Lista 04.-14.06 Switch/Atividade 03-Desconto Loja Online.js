/*Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
 A loja possui benefícios para assinantes em três categorias:
1) Assinante Premium, ganha 20% de desconto e frete grátis
2) Assinante Gold, ganha 20% de desconto mas paga frete
 3)Assinante Silver, ganha 10% de desconto mas paga frete. 
4) Não assinante, sem benefícios. 
Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4).
 Mostrar na tela o valor da compra de acordo com a opção escolhida.*/

let percentualDescontoUm = 0.20
let percentualDescontoTres = 0.10
var ValorTotal
var ValorDesconto
var frete = 12.50


 var ValorDaCompra = Number(prompt('Digite o valor da compra: '))
 var Categorias = Number(prompt('Agora Digite qual é a sua categoria: \n1)Assinante Premium. \n2)Assinante Gold. \n3)Assinante Silver. \n4)Não assinante'))

switch(Categorias){

     case 1:
     ValorDesconto = (ValorDaCompra * percentualDescontoUm) 
     ValorTotal = ValorDaCompra - ValorDesconto
     frete = ValorTotal + frete
     alert(`Desconto aplicado: 20%; \nValor do desconto: ${ValorDesconto}R$; \nValor com frete: ${frete} R$ (PREMIUM NÃO PAGA) \nValor total sem frete: ${ValorTotal}R$`)
     break

     case 2: 
     ValorDesconto = (ValorDaCompra * percentualDescontoUm) 
     ValorTotal = ValorDaCompra - ValorDesconto
     frete = ValorTotal + frete
     alert(`Desconto aplicado: 20%; \nValor do desconto: ${ValorDesconto}R$; \nValor total com frete: ${frete} R$`)
     break

     case 3: 
     ValorDesconto = (ValorDaCompra * percentualDescontoTres) 
     ValorTotal = ValorDaCompra - ValorDesconto
     frete = ValorTotal + frete
     alert(`Desconto aplicado: 10%; \nValor do desconto: ${ValorDesconto}R$; \nValor total com frete: ${frete} R$`)
     break

     case 4: 
     ValorTotal = ValorDaCompra + frete
     alert(`Valor total com frete: ${ValorTotal} R$`)
     break

default:
     alert('Mensagem invalida!')
     break

}