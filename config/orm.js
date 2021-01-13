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

const insertOne = (burger) => {
    const { burger_name, devoured } = burger
    return query('insert into burgers(burger_name, devoured) values(?, ?)', [burger_name, devoured])
        .catch(err => console.error('Error insertOne', err))
};

const updateOne = (burger) => {
    const { ID, burger_name, devoured } = burger
    return query('update burgers set burger_name = ?, devoured = ? where ID = ?', [burger_name, devoured, ID])
        .catch(err => console.error('Error updateOne', err))
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}