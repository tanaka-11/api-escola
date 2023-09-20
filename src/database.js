// Importando o mysql2.
import mysql2 from 'mysql2';

// Guardando os dados da conexão do DATABASE numa constante.
const conexao = mysql2.createConnection({
    host: 'localhost',
    usuario: 'root',
    password: '',
    database: 'apiescola'
});

// Executando a conexão com o comando -> conexao.connect();
conexao.connect(erro => {
    if (erro) {
        console.error(`Erro de conexão: ${erro.message}`)
    } else {
        console.log(`Database conectaco com sucesso!`);
    }
})