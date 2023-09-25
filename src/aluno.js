// Importando nossa conexao ao banco de dados.
import conexao from './database.js';

// Fazendo CRUD pelo NodeJS
// 1 - Lendo e exibindo dados de todos alunos (SELECT).
function exibirAluno(res) {
    // Comando SQL
    const sql = "SELECT * FROM alunos ORDER BY nomeAluno";

    // Conexão
    conexao.query(sql, (erro, resultados) => {
        // Verificando se existe conteúdo: 
        if (resultados.length === 0) {
            // (httpstatus 204 - Sem Conteúdo) e passando o .end() para encerrar a execução *IMPORTANTE TRABALHAR COM STATUS
            res.status(204).end();
            return;
        }
        
        if (erro) {
            // (Erro 400 - Bad Request) passando o .json(erro.code) inves do .end()
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados);
        }
    });
}

// 2 - Inserindo alunos no DATABASE (INSERT INTO)
function inserirAluno(aluno, res){
    // O (?) entende que vão inserir dados sem ter que passar o VALUES (versão mais simplificada).
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"Status" : "Aluno inserido com sucesso!"})
        }
    });
}

// 3 - Exibindo dados de UM aluno
function exibirUmAluno(id, res) {
    // Passando novamente o (?) como forma de passar um valor
    const sql = "SELECT * FROM alunos WHERE id = ?";
    
    // Conectando passando o parametro do id do aluno.
    conexao.query(sql, id, (erro, resultados) => {
        if(resultados === 0){
            // Passando mais uma vez a verificação para ver se existe conteudo
            res.status(204).end();
            // return = (die). Fazer a aplicação parar se apresentar erro
            return;
        }

        // Passando if/else para sucesso e erro via res.status
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }
    }); 
}

// 4 - Atualizando todos/alguns dados do aluno
function atualizarAluno(id, aluno, res){
    // Passando entre colchetes pela ordem na linha abaixo (set ?) e dps (where id ?)
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [aluno , id],(erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json({"Status" : "Aluno atualizado com sucesso!"});
        }
    });
}


// Exportando as funções criadas
export {exibirAluno, inserirAluno, exibirUmAluno, atualizarAluno};
