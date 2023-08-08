// server.js
const express = require('express');
const bodyParser = require('body-parser');
const natural = require('natural');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Carregar classificador pré-treinado, se existir
let classifier;
if (fs.existsSync('classificador.json')) {
  const classifierJson = fs.readFileSync('classificador.json', 'utf-8');
  classifier = natural.BayesClassifier.restore(JSON.parse(classifierJson));
} else {
  classifier = new natural.BayesClassifier();
}

// Rota para treinamento e classificação
app.post('/mensagem', (req, res) => {
  const mensagem = req.body.mensagem;

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

//Enviar para o HTML
//const respostahtml = document.querySelector(`#respostahtml`)
//respostahtml.innerHTML = `${respostahtml}`