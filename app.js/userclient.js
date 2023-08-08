const axios = require('axios');

// Função para enviar uma mensagem para o servidor
function enviarMensagem(mensagem) {
  axios.post('http://localhost:3000/mensagem', { mensagem })
    .then(response => {
      const resposta = response.data.resposta;
      console.log('Resposta do servidor:', resposta);
    })
    .catch(error => {
      console.error('Erro ao enviar mensagem:', error);
    });
}

// Exemplos de mensagens para envio
enviarMensagem('reembolso');
