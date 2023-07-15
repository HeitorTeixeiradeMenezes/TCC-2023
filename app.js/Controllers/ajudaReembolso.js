const natural = require('natural');

function obterRespostaAjudaReembolso(mensagemCliente) {
  // Tokenize a mensagem do cliente em palavras
  const tokenizer = new natural.WordTokenizer();
  const palavrasCliente = tokenizer.tokenize(mensagemCliente.toLowerCase());

  // Palavras-chave corretas
  const palavrasChave = ['reembolso', 'devolucao'];

  // Verificação se existe alguma palavra-chave na resposta do cliente
  const temPalavraChaveReembolso = palavrasChave.some(chave =>
    palavrasCliente.some(palavra => palavra.includes(chave))
  );

  // Resposta apropriada com return
  if (temPalavraChaveReembolso) {
    return 'O reembolso pode ser solicitado preenchendo o formulário disponível na seção de ajuda do nosso site. Após o envio, nossa equipe analisará sua solicitação e responderá em até 2 dias úteis.';
  } else {
    return 'Infelizmente sou incapaz de te dar esta resposta';
  }
}

module.exports = obterRespostaAjudaReembolso;
