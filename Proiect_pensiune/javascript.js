
const sql = require('mssql');
const config = {
    user: 'email',
    password: 'password',
    server: 'DESKTOP-8R1PRJU',
    database: 'PW',
    options: {
        encrypt: true // Use SSL encryption
    }
};

// Connect to the database
sql.connect(config).then(pool => {
    // Query the database
    return pool.request().query('SELECT * FROM users');
}).then(result => {
    // Print the result
    console.log(result.recordset);
}).catch(err => {
    // Handle errors
    console.log(err);
}).finally(() => {
    // Close the connection
    sql.close();
});

