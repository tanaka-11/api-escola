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
    // O (SET ?) entende que vão inserir dados sem ter que passar o VALUES (versão mais simplificada).
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"Status" : "Aluno inserido com sucesso!"})
        }
    });
}

export {exibirAluno, inserirAluno};
