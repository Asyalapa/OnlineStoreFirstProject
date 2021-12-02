const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
// const checkRole = require('../middleware/checkRoleMiddleware')
// checkRole('ADMIN'),
router.post('/', categoryController.create)
router.get('/', categoryController.getAll)

module.exports = router