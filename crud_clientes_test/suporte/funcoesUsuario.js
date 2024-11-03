// funcoes_genericas.js
const request = require('supertest');
const { URLS, HEADERS } = require('./configEnv');
//const baseURL = process.env.URL_ROTA;

/*function getUser (){
    console.log('teste');
}*/

const postUser = async (url, payload, withHeaders = false) => {
    const req = request(url).post('/users').send(payload);
    return withHeaders ? req.set(HEADERS.CONTENT_TYPE) : req;
};

const putUser = async (url, id, payload) => {
    return await request(url)
        .put(`/users/${id}`)
        .send(payload);
};

const getUser = async (url, id) => {
    return await request(url)
        .get(`/users/${id}`);
};

const deleteUser = async (url, id) => {
    return await request(url)
        .delete(`/users/${id}`);
};

module.exports={
    postUser,
    putUser,
    getUser,
    deleteUser
}