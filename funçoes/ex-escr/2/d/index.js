function imprimirDetalhesMensagem(mensagem) {
    const tamanho = mensagem.length;
    const mensagemMaiuscula = mensagem.toUpperCase();
    console.log(`Tamanho da mensagem: ${tamanho}`);
    console.log(`Mensagem em maiúsculas: ${mensagemMaiuscula}`);
  }
  
  imprimirDetalhesMensagem("Olá, mundo!");