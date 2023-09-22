function criarMensagemPessoa(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
  }
  
  // Exemplo de uso da função
  const mensagem = criarMensagemPessoa("Cristiano", 36, "São Leopoldo", "corretor");
  console.log(mensagem);