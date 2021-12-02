const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.post('/', productController.create)
router.get('/:id', productController.getOne)
router.get('/', productController.getAll)
router.delete('/:id', productController.delete)

module.exports = router