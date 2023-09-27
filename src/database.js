// Importando o mysql2.
import mysql2 from 'mysql2';

// Guardando os dados da conexão do DATABASE numa constante via LOCALHOST - XAMPP.
// const conexao = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'apiescola'
// });


// Guardando os dados da conexão do DATABASE numa constante via DB4FREE.NET.
const conexao = mysql2.createConnection({
    host: 'db4free.net',
    user: 'tanaka11',
    password: 'bia&mari',
    database: 'apiescola_tanaka'
});

// Executando a conexão com o comando -> conexao.connect(); ele por si só ja é eficiente mas passamos um if/else para termos mensagens mais amigaveis de erro.
conexao.connect(erro => {
    if (erro) {
        console.error(`Erro de conexão: ${erro.message}`)
    } else {
        // Passando a (conexao.confing.host) para entendermos onde nossa database está conectado
        console.log(`Database conectado com sucesso! em: ${conexao.config.host}`);
    }
});

// Default é utilizado para exportar apenas um arquivo
export default conexao;