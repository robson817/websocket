import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.CONEXAO_DB);

let documentosColecao, usuariosColecao;

async function conectar() {
    try {
        await cliente.connect();

        const db = cliente.db("alura-websockets");
        documentosColecao = db.collection("documentos");
        usuariosColecao = db.collection("usuarios");

        console.log("Conectado ao banco de dados com sucesso!");
    } catch (erro) {
        console.log(erro);
    }
}

conectar();

export { documentosColecao, usuariosColecao };