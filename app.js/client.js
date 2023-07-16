const axios = require('axios');

// Função para enviar uma mensagem e sua classificação para o servidor
function enviarMensagem(mensagem, classificacao) {
  axios.post('http://localhost:3000/mensagem', { mensagem, classificacao })
    .then(response => {
      console.log('Resposta do servidor:', response.data);
    })
    .catch(error => {
      console.error('Erro ao enviar mensagem:', error);
    });
}

// Exemplos de mensagens e classificações para envio
enviarMensagem('Quero solicitar um reembolso do meu pedido.', 'reembolso');
enviarMensagem('Como posso obter um reembolso para o meu pedido?', 'reembolso');
enviarMensagem('Esqueci minha senha. Como faço para recuperar minha conta?', 'recuperação');
