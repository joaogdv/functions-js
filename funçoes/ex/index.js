function calcularMedia(numero1,numero2) {
    const soma = numero1 + numero2
    const media = soma / 2
    return media;
}

const valor1 = parseFloat(prompt("Insira o primeiro valor:"))
const valor2= parseFloat(prompt("Insira o segundo valor"))

const resultado = calcularMedia(valor1, valor2)

alert(`A média dos valores é: ${resultado}` )