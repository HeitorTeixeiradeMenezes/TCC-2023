// server.js
const express = require('express');
const bodyParser = require('body-parser');
const natural = require('natural');
const classifier = new natural.BayesClassifier();
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Carregar classificador pré-treinado, se existir
if (fs.existsSync('classificador.json')) {
  const classifierJson = fs.readFileSync('classificador.json', 'utf-8');
  try {
    classifier.fromJSON(JSON.parse(classifierJson));
  } catch (error) {
    console.error('Erro ao carregar o classificador:', error);
  }
}

// Rota para treinamento e classificação
app.post('/mensagem', (req, res) => {
  const mensagem = req.body.mensagem;
  const classificacao = req.body.classificacao;

  // Treinar o classificador com a mensagem e a classificação recebidas
  classifier.addDocument(mensagem, classificacao);
  classifier.train();

  // Salvar o classificador em um arquivo
  const classifierJson = JSON.stringify(classifier);
  fs.writeFileSync('classificador.json', classifierJson, 'utf-8');

  // Classificar a mensagem recebida
  const classificacaoFinal = classifier.classify(mensagem);

  // Aqui você pode adicionar lógica para retornar a melhor resposta com base na classificação
  let resposta;
  if (classificacaoFinal === 'reembolso') {
    resposta = 'Seu pedido de reembolso será processado em breve.';
  } else if (classificacaoFinal === 'recuperação') {
    resposta = 'Vamos enviar um e-mail com as instruções para recuperar sua conta.';
  } else {
    resposta = 'Desculpe, não consigo entender sua solicitação.';
  }

  res.json({ classificacao: classificacaoFinal, resposta });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
