'use strict'

class Favorites extends Carts {
    constructor () {
        super();
        this.favorites = this.getFavorites();
    }
    getFavorites () {
        console.log('get favorites');
        let myfavorites = localStorage.getItem('favorites');
        if (!myfavorites) {
            localStorage.setItem('favorites', '');
            return [];
        }
        return myfavorites
            .split(',')
            .filter(x => x.trim().length > 0);
    }
    setFavorite (prdId) {
        console.log('set favorites');
        let myfavorites = this.getFavorites();
        if (prdId) {
            myfavorites.push(prdId);
            localStorage.setItem('favorites', myfavorites.toString());
        }
    }
}