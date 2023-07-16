const natural = require('natural');
const classifier = new natural.BayesClassifier();

// Adicione exemplos de palavras-chave para reembolso de pedido
classifier.addDocument('Quero solicitar um reembolso do meu pedido.', 'reembolso');
classifier.addDocument('Como posso obter um reembolso para o meu pedido?', 'reembolso');
classifier.addDocument('Preciso de um reembolso.', 'reembolso');

// Adicione exemplos de palavras-chave para recuperação de conta
classifier.addDocument('Esqueci minha senha. Como faço para recuperar minha conta?', 'recuperação');
classifier.addDocument('Minha conta foi hackeada. Preciso recuperá-la.', 'recuperação');
classifier.addDocument('Não consigo acessar minha conta. Como posso recuperá-la?', 'recuperação');

// Treine o classificador
classifier.train();

module.exports = classifier;
