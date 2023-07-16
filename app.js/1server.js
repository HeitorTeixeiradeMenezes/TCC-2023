// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Rota de exemplo para receber mensagens
app.post('/mensagem', (req, res) => {
  const mensagem = req.body.mensagem;
  console.log('Mensagem recebida:', mensagem);
  res.json({ mensagem: 'Mensagem recebida com sucesso!' });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
