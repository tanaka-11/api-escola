import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`Raíz da API NodeJS + Express + MySQL`)
});

// Exibindo TODOS os alunos
app.get("/alunos", (req, res) => {
    res.send(`Exibindo os dados de TODOS os alunos`);
});

// Exibindo UM aluno
app.get("/alunos:id", (req, res) => {
    res.send(`Exibindo os dados de UM aluno`);
});

// INSERINDO alunos
app.post("/alunos", (req, res) => {
    res.send(`Inserindo alunos`);
});

// ATUALIZANDO dados de UM aluno
app.patch("/alunos:id", (req, res) => {
    res.send(`Atualizando alunos`);
});

// DELETANDO aluno
app.delete("/alunos:id", (req, res) => {
    res.send(`Deletando UM aluno`);
});

// Executando o servidor
const porta = 8080;
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});