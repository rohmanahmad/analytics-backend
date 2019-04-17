'use strict'

class Carts extends Utils {
    constructor () {
        super();
        this.cartStorage = 'localStorage';
        this.shoppingCartsCollection = 'shopping_carts';
        this.cartsDetailCollection = 'carts_detail';
    }
    getCartsDetails () {
        console.log('get carts detail');
        return new Promise((resolve, reject) => {
            const storage = this.storage(this.cartStorage);
            storage
                .collection(this.cartsDetailCollection)
                .read()
                .then(function (carts) {
                    console.log({carts});
                    return resolve(carts);
                });
        })
    }
    setCartsDetails () {
        const storage = this.storage(this.cartStorage);
        const carts = window.variables.cartsDetail || [];
        storage
            .collection(this.cartsDetailCollection)
            .upsert(JSON.stringify(carts));
    }
    getShoppingCarts () {
        return new Promise((resolve, reject) => {
            const storage = this.storage(this.cartStorage);
            storage
                .collection(this.shoppingCartsCollection)
                .read(null, false)
                .then((mycarts) => {
                    if (!mycarts) {
                        storage
                            .collection(this.shoppingCartsCollection)
                            .upsert('');
                        return resolve([]);
                    }
                    mycarts = typeof mycarts === 'string' ? mycarts.split(',') : mycarts;
                    return resolve(mycarts);
                })
                .catch((err) => reject(err));
        })
    }
    addToShoppingCarts () {
        console.log('adding to shopping carts');
        const storage = this.storage(this.cartStorage);
        const shopCarts = window.variables.shoppingCarts || [];
        let myShopCarts = '';
        if (typeof shopCarts === 'object') {
            myShopCarts += shopCarts.toString();
        } else {
            myShopCarts += shopCarts;
        }
        storage
            .collection(this.shoppingCartsCollection)
            .replace(myShopCarts);
    }
    addToLabelTotal (selector = '') {
        console.log('adding to total');
        const wCartsDetail = window.variables.cartsDetail;
        if (selector && wCartsDetail) {
            const mValue = wCartsDetail.map(x => (parseInt(x.price) * parseInt(x.qty)));
            const total = _.sum(mValue);
            $(selector).html(total.toLocaleString());
        }
    }
}