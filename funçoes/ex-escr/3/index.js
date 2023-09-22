function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return "Divisão por zero não é permitida";
    }
    return a / b;
  }
  
  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  console.log(`Soma: ${somar(numero1, numero2)}`);
  console.log(`Subtração: ${subtrair(numero1, numero2)}`);
  console.log(`Multiplicação: ${multiplicar(numero1, numero2)}`);
  console.log(`Divisão: ${dividir(numero1, numero2)}`);