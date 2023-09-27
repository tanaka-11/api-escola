// Importando arquivos npm e nossas funções
import express from "express";
import cors from "cors";
import {exibirAluno, inserirAluno, exibirUmAluno, atualizarAluno, excluirAluno} from "./src/aluno.js";

// Adicionando constantes para guardar a porta do servidor e o API Express
// usando o comando coringa process.env.PORT para a aplicação rodar no servidor ou na porta escrita
const porta = process.env.PORT || 3306;
const app = express();

// Adicionando suporte ao formato json
app.use(express.json());

// Adicionando suporte para dados vindo de formulários
app.use(express.urlencoded({extended:true}));

// Permitindo acesso aos arquivos da API
app.use(cors())

// Criando as rotas
// Raiz
app.get("/", (req, res) => {
    // res.send(`Raíz da API NodeJS + Express + MySQL`)
    res.redirect(`https://documenter.getpostman.com/view/29885695/2s9YJZ34co`);
});

// Exibindo dados de TODOS os alunos
app.get("/alunos", (req, res) => {
    // res.send(`Exibindo os dados de TODOS os alunos`);
    exibirAluno(res);
});

// Exibindo dados de UM aluno
app.get('/alunos/:id', (req, res) => {
    // res.send(`Dados de UM aluno`);

    // Passando uma requisão que tenha como parametro o id e guardando os dados numa constante.
    const id = parseInt(req.params.id);

    // Passando os parametros de id e res na função
    exibirUmAluno(id,res);
});

// POST: Endpoint para inserir novos alunos
app.post("/alunos", (req, res) => {
    // res.send(`Inserindo alunos`);
    
    // Criado constante para armazenar os dados (req) = requisição, (res) = resposta
    const novoAluno = req.body;

    // Executando o comando 
    inserirAluno(novoAluno, res)
});

// PUT:  Endpoint para atualizar TODOS os dados de UM aluno
app.put('/alunos', (req,res) => {
    res.send(`Atualizar TODOS dados de UM aluno.`);
})

// PATCH:  Endpoint para atualizar todos/alguns dados de UM aluno
app.patch("/alunos/:id", (req, res) => {
    // res.send(`Atualizar alguns ou todos os dados de UM aluno.`);
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizarAluno(id, aluno, res);
});

// DELETE:  Endpoint para excluir alunos
app.delete("/alunos/:id", (req, res) => {
    // res.send(`Deletando UM aluno`);
    const id = parseInt(req.params.id);
    excluirAluno(id, res);
});

// Executando o servidor
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});