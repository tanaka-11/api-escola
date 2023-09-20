// Importando o mysql2.
import mysql2 from 'mysql2';

// Guardando os dados da conexão do DATABASE numa constante.
const conexao = mysql2.createConnection({
    host: 'localhost',
    usuario: 'root',
    password: '',
    database: 'apiescola'
});

//