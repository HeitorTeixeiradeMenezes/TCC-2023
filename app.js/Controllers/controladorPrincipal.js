const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

const classifier = require('./classifier'); // Importe o classificador treinado de um arquivo separado

function controladorPrincipal(req, res) {
  const mensagem = req.body.mensagem;

  // Analisar a mensagem
  const tokens = tokenizer.tokenize(mensagem);
  const resposta = classifier.classify(tokens);

  // Resposta adequada com base na classificação
  let respostaFinal;
  if (resposta === 'reembolso') {
    respostaFinal = 'Para solicitar um reembolso, entre em contato com nosso suporte ao cliente.';
  } else if (resposta === 'recuperação') {
    respostaFinal = 'Para recuperar sua conta, visite nossa página de recuperação e siga as instruções fornecidas.';
  } else {
    respostaFinal = 'Desculpe, não consigo entender sua solicitação.';
  }

  // Enviar resposta ao cliente
  res.json({ resposta: respostaFinal });
}

module.exports = controladorPrincipal;
