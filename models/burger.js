const orm = require('../config/orm')

class Burger {
    static all() {
        return orm.selectAll()
    }

    static buy(burger_name) {
        const burger = { burger_name, devoured: false }
        return orm.insertOne(burger)
    }

    static devour(burger) {
        burger.devoured = true
        return orm.updateOne(burger)
    }
}

module.exports = Burger;