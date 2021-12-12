
export default class ProductStore {
    constructor() {
        this._categories = [
            {id: 1, name: 'Беспружинные'},
            {id: 2, name: 'Пружинные'},
            {id: 3, name: 'Детские'},
            {id: 4, name: 'Подушки'}
        ]
        this._sizes = [
            {id: 1, name: '90 х 200'},
            {id: 2, name: '140 х 200'},
        ]
        this._products = [
            {id: 1, name: 'Кокос', price: 5000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 2, name: 'Анталия', price: 6000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 3, name: 'Гранд', price: 7000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 4, name: 'Латекс', price: 8000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 5, name: 'Орто Х', price: 9000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 6, name: 'Кокос', price: 5000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 7, name: 'Анталия', price: 6000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 8, name: 'Гранд', price: 7000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 9, name: 'Латекс', price: 8000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
        ]
        this._selectedCategories = {}
        this._selectedSizes = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
    }

    setCategories(categories) {
        this._categories = categories
    }

    setSizes(sizes) {
        this._sizes = sizes
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedCategories(categories) {
        this.setPage(1)
        this._selectedCategories = categories
    }

    setSelectedSizes(sizes) {
        this.setPage(1)
        this._selectedSizes = sizes
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get categories() {
        return this._categories
    }

    get sizes() {
        return this._sizes
    }

    get products() {
        return this._products
    }

    get selectedCategories() {
        return this._selectedCategories
    }

    get selectedSizes() {
        return this._selectedSizes
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}