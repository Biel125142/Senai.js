let alturaPedrinho = 1.60
let alturaJoaozinho = 1.75
let anosQueLevou = 0 

while (alturaPedrinho < alturaJoaozinho) {
    alturaPedrinho += 0.03 
    alturaJoaozinho += 0.01 
    anosQueLevou++

    if (alturaPedrinho > alturaJoaozinho) {
        alert(`Pedrinho fica maior que Joãozinho em: ${anosQueLevou} anos`)}
}
