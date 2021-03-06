const express = require('express')

const { userController,expenseIncomeController } = require('../controller')

module.exports = () =>{
    const router = express.Router()

    router.post('/login', userController.loginExistingUsers)

    router.post('/signup', userController.saveNewUsers)

    router.get('/category', expenseIncomeController.getAllCategory)

    router.post('/category', expenseIncomeController.saveNewCategory)

    return router
}
