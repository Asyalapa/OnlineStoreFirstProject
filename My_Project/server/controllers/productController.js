const {Product, ProductInfo} = require('../models/models')
const apiError =  require('../error/apiError')
const uuid = require('uuid')
const path = require('path');

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, sizeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }
            const product = await Product.create({name, price, categoryId, sizeId, img: fileName})
            return res.json(product)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }

    }
    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }
    async getAll(req, res) {
        let {categoryId, sizeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!categoryId && !sizeId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (categoryId && !sizeId) {
            products = await Product.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if (!categoryId && sizeId) {
            products = await Product.findAndCountAll({where:{sizeId}, limit, offset})
        }
        if (categoryId && sizeId) {
            products = await Product.findAndCountAll({where:{sizeId, categoryId}, limit, offset})
        }
        return res.json(products)
    }
    // async delete (req, res) {
    //     const product = await Product.delete()
    //     return res.json(product)
    // }
}

module.exports = new ProductController()