const { faker } = require('@faker-js/faker');

/*const json_arquivo_cadastro_usuario = {
    nome: "Henrique Teste",
    telefone: "(11) 12345-6789",
    email: "henrique3@usuario.com", //nossa chave unica
    senha: "1232"
}*/

const payloadUsuario = {
    nome: faker.person.fullName(),
    telefone: faker.phone.number('+55 (##) ####-####'),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

const payloadUsuarioEmailFieldNull = {
    nome: faker.person.fullName(),
    telefone: faker.phone.number('+55 (##) ####-####'),
    email: null,
    senha: faker.internet.password()
}

const novoUsuario = {
    nome: faker.person.fullName(),
    telefone: faker.phone.number('+55 (##) ####-####'),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

module.exports = {
    //json_arquivo_cadastro_usuario,
    payloadUsuario,
    payloadUsuarioEmailFieldNull,
    novoUsuario
};