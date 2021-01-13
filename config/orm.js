const connection = require('./connection')

const query = (q, args) => {
    return new Promise((resolve, reject) => {
        connection.query(q, args, function(err, result, fields) {
            if (err) return reject(err)
            resolve(JSON.parse(JSON.stringify(result)))
        })
    })
}

const selectAll = () => {
    return query('select * from burgers')
        .catch(err => console.error('Error selectAll', err))
};