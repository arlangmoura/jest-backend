const { faker } = require('@faker-js/faker');

/*const json_arquivo_cadastro_usuario = {
    nome: "Henrique Teste",
    telefone: "(11) 12345-6789",
    email: "henrique3@usuario.com", //nossa chave unica
    senha: "1232"
}*/

const generatePhoneNumber = () => {
    const ddd = faker.string.numeric(2); // Gera dois dígitos para o DDD
    const parte1 = faker.string.numeric(4); // Quatro dígitos
    const parte2 = faker.string.numeric(4); // Quatro dígitos
    return `+55 (${ddd}) ${parte1}-${parte2}`;
}

const payloadUsuario = {
    nome: faker.person.fullName(),
    telefone: generatePhoneNumber(),//telefone: faker.phone.number('+55 (##) ####-####'),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

const payloadUsuarioEmailFieldNull = {
    nome: faker.person.fullName(),
    telefone: generatePhoneNumber(),//telefone: faker.phone.number('+55 (##) ####-####'),
    email: null,
    senha: faker.internet.password()
}

const novoUsuario = {
    nome: faker.person.fullName(),
    telefone: generatePhoneNumber(),//telefone: faker.phone.number('+55 (##) ####-####'),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

module.exports = {
    //json_arquivo_cadastro_usuario,
    payloadUsuario,
    payloadUsuarioEmailFieldNull,
    novoUsuario
};