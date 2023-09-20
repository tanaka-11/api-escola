// Importando o mysql2.
import mysql2 from 'mysql2';

// Guardando os dados da conexão do DATABASE numa constante.
const conexao = mysql2.createConnection({
    host: 'localhost',
    usuario: 'root',
    password: '',
    database: 'apiescola'
});

// Executando a conexão com o comando -> conexao.connect(); ele por si só ja é eficiente mas passamos um if/else para termos mensagens mais amigaveis de erro.
conexao.connect(erro => {
    if (erro) {
        console.error(`Erro de conexão: ${erro.message}`)
    } else {
        console.log(`Database conectado com sucesso!`);
    }
});

// Default é utilizado para exportar apenas um arquivo
export default conexao;