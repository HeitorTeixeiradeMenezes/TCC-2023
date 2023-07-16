const obterRespostaAjudaReembolso = require('./ajudaReembolso');


// Objeto de mapeamento de palavras-chave para funções
const funcoesPorPalavraChave = {
  palavrasChavereembolso: obterRespostaAjudaReembolso,

  // Adicione novas palavras-chave e as funções correspondentes aqui

};

// Função principal do controlador que recebe a solicitação do cliente e retorna a resposta
function handleRequest(req, res) {
  const mensagemCliente = req.body.mensagem; // Supondo que a mensagem do cliente seja enviada no corpo da requisição

  // Remover caracteres acentuados da mensagem do cliente
  const mensagemSemAcentos = mensagemCliente.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Análise das palavras-chave na mensagem do cliente
  const palavrasChave = mensagemSemAcentos.toLowerCase().split(" ");

  let resposta = '';
  let funcaoEncontrada = false;

  // Verificar as palavras-chave e chamar a função de negócio apropriada
  for (const palavraChave in funcoesPorPalavraChave) {
    const funcao = funcoesPorPalavraChave[palavraChave];
    const palavrasChaveFuncao = palavraChave.toLowerCase().split(" ");

    // Verificar se todas as palavras-chave estão presentes na mensagem do cliente
    const palavrasPresentes = palavrasChaveFuncao.every(palavra => palavrasChave.includes(palavra));
    if (palavrasPresentes) {
      resposta = funcao(mensagemSemAcentos);
      funcaoEncontrada = true;
      break;
    }
  }

  if (funcaoEncontrada) {
    console.log('Resposta ao cliente:', resposta);
    res.send(resposta);
  } else {
    // Lógica para resposta padrão ou mensagem de erro
    const respostaPadrao = 'Desculpe, não foi possível identificar a função apropriada.';
    console.log('Resposta ao cliente:', respostaPadrao);
    res.send(respostaPadrao);
  }
}

module.exports = {
  handleRequest
};

// Simulação de solicitação do cliente
const request = {
  body: {
    mensagem: 'solicito um  ajuda devolucao pro minha compra.'
  }
};

// Simulação de resposta
const response = {
  send: function(resposta) {
    console.log('Resposta enviada ao cliente:', resposta);
  }
};

// Chamada da função handleRequest com a simulação de solicitação e resposta
handleRequest(request, response);
