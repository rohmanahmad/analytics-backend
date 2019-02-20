'use strict'

class Carts extends Utils {
    constructor () {
        super();
        this.cartStorage = 'localStorage';
    }
    getCartsDetails () {
        console.log('get carts detail')
        const storage = this.storage(this.cartStorage);
        let carts = storage.collection('shopping_carts').read();
        if (carts && carts.length > 0) {
            carts = JSON.parse(carts);
        } else {
            carts = [];
        }
        return carts;
    }
    setCartsDetails () {
        const carts = window.carts_details || [];
        const storage = this.storage(this.cartStorage);
        storage.collection('shopping_carts').upsert(carts);
    }
    getShoppingCarts () {
        const mycarts = localStorage.getItem('shopping_carts');
        if (!mycarts) {
            localStorage.setItem('shopping_carts', '');
            return [];
        }
        return mycarts.split(',');
    }
    addToShoppingCarts () {
        console.log('adding to shopping carts');
        const shopCarts = window.variables.shopping_carts || {};
        let myShopCarts = '';
        if (typeof shopCarts === 'object') {
            myShopCarts += shopCarts.toString();
        } else {
            myShopCarts += shopCarts;
        }
        localStorage.setItem('shopping_carts', myShopCarts);
    }
}