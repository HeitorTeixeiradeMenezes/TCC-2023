const axios = require('axios');

// Enviar mensagem para o servidor
axios.post('http://localhost:3000/mensagem', { mensagem: 'desejo fazer um pedido de reembolso' })
  .then(response => {
    console.log('Resposta do servidor:', response.data);
  })
  .catch(error => {
    console.error('Erro ao enviar mensagem:', error);
  });
