const { faker } = require('@faker-js/faker');

const novoConteudo = {
    titulo: faker.word.words(10),
    descricao: faker.word.words(10),
    tipoConteudo: faker.word.words(10),
    conteudo: faker.word.words(10)
};

const conteudoAtualizado = {
    titulo: 'Medio',
    descricao: 'Escola',
    tipoConteudo: 'Matéria',
    conteudo: 'Educacional'
};

module.exports = {
    novoConteudo,
    conteudoAtualizado
}