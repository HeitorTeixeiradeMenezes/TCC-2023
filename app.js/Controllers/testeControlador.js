const obterRespostaAjudaReembolso = require('./ajudaReembolso');

// Função principal do controlador que recebe a solicitação do cliente e retorna a resposta
function handleRequest(req, res) {
  const mensagemCliente = req.body.mensagem; // Supondo que a mensagem do cliente seja enviada no corpo da requisição

  // Análise das palavras-chave na mensagem do cliente
  const palavrasChave = mensagemCliente.toLowerCase().split(' ');

  // Verificar as palavras-chave e chamar a função de negócio apropriada
  if (palavrasChave.includes(`devolucao`,`restituição`)) {
    const resposta = obterRespostaAjudaReembolso(mensagemCliente);
    res.send(resposta);
  } else if (palavrasChave.includes('suporte') && palavrasChave.includes('cliente')) {
    const resposta = obterRespostaSuporteCliente();
    res.send(resposta);
  } else if (palavrasChave.includes('informações') && palavrasChave.includes('produto')) {
    const resposta = obterRespostaInformacoesProduto();
    res.send(resposta);
  } else {
    // Lógica para resposta padrão ou mensagem de erro
    res.send('Desculpe, não foi possível identificar a função apropriada.');
  }
}
// Simulando uma mensagem do cliente
const mensagemSimulada = 'preciso de ajuda para pedir um reembolso em uma compra indesejada no site';

// Simulando uma solicitação
const request = {
  body: {
    mensagem: mensagemSimulada
  }
};

// Simulando uma resposta
const response = {
  send: function(resposta) {
    console.log(resposta);
  }
};

// Chamar a função handleRequest com a mensagem simulada e a resposta simulada
handleRequest(request, response);
