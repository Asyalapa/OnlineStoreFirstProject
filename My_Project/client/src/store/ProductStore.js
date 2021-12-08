import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {id: 1, name: 'Беспружинные'},
            {id: 2, name: 'Пружинные'}
        ]
        this._sizes = [
            {id: 1, name: '90 х 200'},
            {id: 2, name: '140 х 200'}
        ]
        this._products = [
            {id: 1, name: 'Кокос', price: 5000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 2, name: 'Анталия', price: 6000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 3, name: 'Гранд', price: 7000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 4, name: 'Латекс', price: 8000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'},
            {id: 5, name: 'Орто Х', price: 9000, rating: 5, img: 'https://ideal-matras.ru/preview/type_h420/files/catalog/product/2018/06/60.png'}
        ]
        makeAutoObservable(this) //отслеживание состояния переменных
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

    get categories() {
        return this._categories
    }

    get sizes() {
        return this._sizes
    }

    get products() {
        return this._products
    }
}