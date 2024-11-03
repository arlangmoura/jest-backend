const { 
    getConteudos, 
    postConteudo, 
    getConteudoById, 
    deleteConteudo, 
    putConteudo 
} = require('../suporte/funcoesConteudo');

const {
    novoConteudo,
    conteudoAtualizado
} = require('../fixtures/jsonConteudos');
const rotaUsers = process.env.URL_ROTA;

describe('Testes para o CRUD de conteúdos', () => {

    let recebeId;

    beforeAll (async()=>{
        const responsePost = await postConteudo(rotaUsers, novoConteudo);
        recebeId = responsePost.body.id;

        expect(responsePost.status).toBe(201);
        expect(recebeId).toBeDefined();
        console.log('Conteúdo cadastrado: ', responsePost.body);

        expect(responsePost.body.titulo).toBe(novoConteudo.titulo);
        expect(responsePost.body.descricao).toBe(novoConteudo.descricao);
        expect(responsePost.body.tipoConteudo).toBe(novoConteudo.tipoConteudo);
        expect(responsePost.body.conteudo).toBe(novoConteudo.conteudo);
    });

    it('Deve buscar todos os conteúdos', async () => {
        const responseConteudos = await getConteudos(rotaUsers);
        console.log('Todos os conteúdos consultados: ', responseConteudos.body);
        expect(responseConteudos.status).toBe(200)
    });

    it('Deve buscar um conteúdo pelo ID', async () => {
        const responseConteudo = await getConteudoById(rotaUsers, recebeId);
        console.log(`Conteúdo do ID ${recebeId} consultado: `, responseConteudo.body);
        expect(responseConteudo.status).toBe(200)
        expect(responseConteudo.body.titulo).toBe(novoConteudo.titulo);
        expect(responseConteudo.body.descricao).toBe(novoConteudo.descricao);
        expect(responseConteudo.body.tipoConteudo).toBe(novoConteudo.tipoConteudo);
        expect(responseConteudo.body.conteudo).toBe(novoConteudo.conteudo);
    });

    it('Deve atualizar um conteúdo', async () => {
        const responsePut = await putConteudo(rotaUsers, recebeId, conteudoAtualizado);
        console.log('Conteúdo alterado: ', responsePut.body);
        expect(responsePut.status).toBe(201);

        expect(responsePut.body.titulo).toBe(conteudoAtualizado.titulo);
        expect(responsePut.body.descricao).toBe(conteudoAtualizado.descricao);
        expect(responsePut.body.titulo).toBe(conteudoAtualizado.titulo);
        expect(responsePut.body.descricao).toBe(conteudoAtualizado.descricao);
        expect(responsePut.body.tipoConteudo).toBe(conteudoAtualizado.tipoConteudo);
        expect(responsePut.body.conteudo).toBe(conteudoAtualizado.conteudo);
    });

    it('Deve deletar um conteúdo', async () => {
        const responseDelete = await deleteConteudo(rotaUsers, recebeId);
        //console.log(responseDelete.body);
        expect(responseDelete.status).toBe(200);
        expect(responseDelete.body).toEqual({ message: "O conteúdo foi removido com sucesso!" });
    });
});
