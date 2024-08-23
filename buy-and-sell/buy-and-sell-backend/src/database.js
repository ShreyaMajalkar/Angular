
import mysql from 'mysql';

let connection;

export const db = {
    connect: () => {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'hapi-server',
            password: 'Abcd@123!',
            database: 'buy-and-sell'
        });
        connection.connect();
    },
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}