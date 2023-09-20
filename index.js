// Importando arquivos
import express from "express";
import {exibirAluno, inserirAluno} from "./src/aluno.js";

// Adicionando constantes para guardar a porta do servidor e o API Express
const porta = 8080;
const app = express();

// Adicionando suporte ao formato json
app.use(express.json());

// Adicionando suporte para dados vindo de formulários
app.use(express.urlencoded({extended:true}));

// Criando as rotas
// Raiz
app.get("/", (req, res) => {
    res.send(`Raíz da API NodeJS + Express + MySQL`)
});

// Exibindo dados de TODOS os alunos
app.get("/alunos", (req, res) => {
    // res.send(`Exibindo os dados de TODOS os alunos`);
    exibirAluno(res);
});

// Exibindo dados de UM aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`Dados de UM aluno`);
});

// POST: Endpoint para inserir novos alunos
app.post("/alunos", (req, res) => {
    // res.send(`Inserindo alunos`);
    
    // Criado constante para armazenar os dados (req.body) - requisição (res) - resposta
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
    res.send(`Atualizar alguns ou todos os dados de UM aluno.`);
});

// DELETE:  Endpoint para excluir alunos
app.delete("/alunos/:id", (req, res) => {
    res.send(`Deletando UM aluno`);
});

// Executando o servidor
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});