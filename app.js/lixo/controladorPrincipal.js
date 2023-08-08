// Exemplo do controlador principal

function processarMensagem(mensagem) {
  // Aqui, você pode adicionar lógica para processar a mensagem do cliente
  // Pode envolver a classificação da mensagem usando o classificador treinado
  // e retornar uma resposta adequada com base na classificação

  const classificacao = classifier.classify(mensagem);

  if (classificacao === 'reembolso') {
    return 'Seu pedido de reembolso será processado em breve.';
  } else if (classificacao === 'recuperação') {
    return 'Vamos enviar um e-mail com as instruções para recuperar sua conta.';
  } else {
    return 'Desculpe, não consigo entender sua solicitação.';
  }
}

module.exports = { processarMensagem };
