const sql = require('mssql');
const config = {
    user: 'userApi',
    password: 'userApi',
    server: 'DEMONOID',
    database: 'db_boleta_legal',
    options: {
        trustedconection: false,
        enableArithAbort: true,
        encrypt: false,
    }
};
exports.config = config;
exports.sql = sql;