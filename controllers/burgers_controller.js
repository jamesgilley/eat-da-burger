const { Router } = require('express');
const Burger = require('../models/burger');

const router = new Router();

router.get('/', async(req, res) => {
    const burgers = await Burger.all()
    res.render('index', { burgers })
})

router.post('/', async(req, res) => {
    const { burger_name } = req.body
    await Burger.buy(burger_name)
    const burgers = await Burger.all()
    res.render('index', { burgers })
})

//PUT method doesn't work with HTML Forms
router.post('/devour', async(req, res) => {
    console.log('-----PUT-------')
    const burger = req.body
    console.log('PUT', burger)
    await Burger.devour(burger)
    const burgers = await Burger.all()
    res.render('index', { burgers })

})

module.exports = router