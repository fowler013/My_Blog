import mysql from 'mysql';

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'innovatebham',
    database: 'blog'
});

function executeQuery(sql, args = []) {
    return getConnection()
        .then((connection) => {
            return new Promise((resolve, reject) => {
                connection.query(sql, args, (err, result) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result)
                    }
                })
            })
        })
}

//this is a test to see if I can get my new promises to work//

function callProcedure() {
    let placeholders = generatePlaceholders(args)// be sure to pass in a PARAM//
    let callString = `CALL ${procedureName}(${placeholders});`// CALL GetChirps();, or CALL InsertChirp(?,?,?);
    return executeQuery(callString, args)
}

//this is to get row infomation//
function rows(procedureName, args = []) {
    return callProcedure(procedureName, args)
        .then((resultsets) => {
            return resultsets[0]
        })
}

//this is to get just 1 row//
function row(procedureName, args = []) {
    return callProcedure(procedureName, args)
        .then((resultsets) => {
            return resultsets[0][0];
        })
}
function empty(procedureName, args = []) {
    return callProcedure(procedureName, args)
        .then(() => { // go back and double check this//
            return;
        })
}
function generatePlaceholders(args = []) { // this only passes args//
    let placeholders = '';
    if (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            if (i === args.length - 1) { // if we are on the last argument in the array
                placeholders += '?';
            } else {
                placeholders += '?,' // pay attention to this!!!//
            }
        }
    }
    return placeholders
}
function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else (
                resolve(connection)
            )
        });
    });
}


export { row, rows, empty, executeQuery, generatePlaceholders };

// async function executeQuery(sql, args = []) {
//     let connection = await getConnection();
//     return sendQueryToDB(connection, sql, args);
// }

// function callProcedure(procedureName, args = []) {
//     let placeholders = generatePlaceholders(args);
//     let callString = `CALL ${procedureName}(${placeholders});`; // CALL GetChirps();, or CALL InsertChirp(?,?,?);
//     return executeQuery(callString, args);
// }

// async function rows(procedureName, args = []) {
//     let resultsets = await callProcedure(procedureName, args);
//     return resultsets[0];
// }

// async function row(procedureName, args = []) {
//     let resultsets = await callProcedure(procedureName, args);
//     return resultsets[0][0];
// }

// async function empty(procedureName, args = []) {
//     await callProcedure(procedureName, args);
// }

// function generatePlaceholders(args = []) {
//     let placeholders = '';
//     if (args.length > 0) {
//         for (let i = 0; i < args.length; i++) {
//             if (i === args.length - 1) { // if we are on the last argument in the array
//                 placeholders += '?';
//             } else {
//                 placeholders += '?,';
//             }
//         }
//     }
//     return placeholders;
// }

// function getConnection() {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(connection);
//             }
//         });
//     });
// }

// function sendQueryToDB(connection, sql, args = []) {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, args, (err, result) => {
//             connection.release();
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }

// export { row, rows, empty, executeQuery, generatePlaceholders };