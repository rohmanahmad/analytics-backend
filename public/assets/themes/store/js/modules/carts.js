'use strict'

class Carts extends Utils {
    constructor () {
        super();
        this.shopping_carts = [];
        this.carts_details = [];
    }
    getCartsDetails () {
        console.log('get carts detail')
        const storage = this.storage('DB');
        let carts = storage.collection('my_carts').read();
        if (carts && carts.length > 0) {
            carts = JSON.parse(carts);
        } else {
            carts = [];
        }
        return carts;
    }
    setCartsDetails () {
        const carts = this.carts_details || [];
        const storage = this.storage('DB');
        storage.collection('my_carts').upsert(carts);
    }
    // shopping carts
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
        let myShopCarts = '';
        if (typeof this.shopping_carts === 'object') {
            myShopCarts += this.shopping_carts.toString();
        } else {
            myShopCarts += this.shopping_carts;
        }
        localStorage.setItem('shopping_carts', myShopCarts);
    }
}