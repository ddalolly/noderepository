

function soma(a, b) {
    Number(console.log(`A soma é ${a+b}`));
}
                           
function subtracao(a, b) {
    Number(console.log(`A subtração é ${a-b}`));
}

function multiplicacao(a, b) {
    Number(console.log(`A multiplicação é ${a*b}`));
}

function divisao(a, b) {
    Number(console.log(`A divisão é ${a/b}`));
}

module.exports = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao

};