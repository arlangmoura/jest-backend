const request = require('supertest');
const { URLS, HEADERS } = require('./configEnv');

const getConteudos = async (url) => {
    return await request(url)
        .get(`/conteudos`);
};

const postConteudo = async (url, payload, withHeaders = false) => {
    const req = request(url).post('/conteudos').send(payload);
    return withHeaders ? req.set(HEADERS.CONTENT_TYPE) : req;
};

const putConteudo = async (url, id, payload) => {
    return await request(url)
        .put(`/conteudos/${id}`)
        .send(payload);
};

const getConteudoById = async (url, id) => {
    return await request(url)
        .get(`/conteudos/${id}`);
};

const deleteConteudo = async (url, id) => {
    return await request(url)
        .delete(`/conteudos/${id}`);
};

module.exports = {
    getConteudos,
    postConteudo,
    getConteudoById,
    deleteConteudo,
    putConteudo
};
