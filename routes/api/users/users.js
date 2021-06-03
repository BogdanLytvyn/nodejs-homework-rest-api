const express = require('express')
const router = express.Router()
const validate = require('./validation')
const userController = require('../../../controllers/users')
const guard = require('../../../helpers/guard')


router.post('/signup', validate.createUser, userController.signupUser)
router.post('/login', validate.loginUser, userController.loginUser)
router.post('/logout', guard, userController.logoutUser)
router.get('/current', guard, userController.getCurrentUser)

router.get('/verify/:token', userController.emailVerify)
router.post('/verify', userController.repeatEmailVerify)


module.exports = router
