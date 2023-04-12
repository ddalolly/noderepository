
function soma(a, b) {
    console.log(`A soma é ${a+b}`)
}
                           
function subtração(a, b) {
    console.log(`A subtração é ${a-b}`);
}

function multiplicação(a, b) {
    console.log(`A multiplicação é ${a*b}`);
}

function divisão(a, b) {
    console.log(`A divisão é ${a/b}`);
}

module.exports = {
    soma: soma,
    subtração: subtração,
    multiplicação: multiplicação,
    divisão: divisão

};