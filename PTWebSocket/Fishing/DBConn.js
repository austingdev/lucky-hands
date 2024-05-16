var mysql = require('mysql2');
const dbconn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'ronaVirus22!',
    database: 'FishyRich',
    port: '3306',
    connectionLimit: 200
});

module.exports = {dbconn};
