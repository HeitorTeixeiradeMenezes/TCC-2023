const obterRespostaAjudaReembolso = require('./ajudaReembolso');


// Objeto de mapeamento de palavras-chave para funções
const funcoesPorPalavraChave = {
  reembolso: obterRespostaAjudaReembolso,
  devolucao: obterRespostaAjudaReembolso
};

// Função principal do controlador que recebe a solicitação do cliente e retorna a resposta
function handleRequest(req, res) {
  const mensagemCliente = req.body.mensagem; // Supondo que a mensagem do cliente seja enviada no corpo da requisição

  let resposta = '';
  let funcaoEncontrada = false;

  // Verificar as palavras-chave e chamar a função de negócio apropriada
  for (const palavraChave in funcoesPorPalavraChave) {
    const funcao = funcoesPorPalavraChave[palavraChave];
    const palavrasChave = palavraChave.toLowerCase().split(' ');

    // Verificar se todas as palavras-chave estão presentes na mensagem do cliente
    const palavrasPresentes = palavrasChave.every(palavra => mensagemCliente.toLowerCase().includes(palavra));
    if (palavrasPresentes) {
      resposta = funcao(mensagemCliente);
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
