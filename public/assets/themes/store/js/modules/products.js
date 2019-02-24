class Products extends Categories {

    constructor () {
        super();
        this.brandsCollection = 'brands';
        this.brandStorage = 'localStorage';
    }
    loadBrands () {
        if (window.variables.brands) {
            console.log('loading brands');
            const self = this;
            const brandStorage = this
                .storage(this.brandStorage)
                .collection(this.brandsCollection);
            brandStorage.read()
                .then(function (brands) {
                    if (!brands || brands.length === 0) {
                        $.ajax({
                            url: '/brands/list',
                            type: 'get',
                            data: {},
                            success: (res) => {
                                brandStorage.upsert(res.items);
                                self.setBrands(res.items);
                            },
                            error: () => {
                                console.log('brands not loaded');
                            }
                        });
                    } else {
                        self.setBrands(brands);
                    }
            });
        }
        return this
    }
    setBrands (data = []) {
        window.variables.brands = _.reduce(data, function (res, x) {
            res[x.id] = x.name;
            return res;
        }, {})
    }
    getBrands () {
        return new Promise((resolve, reject) => {
            this
                .storage(this.brandStorage)
                .collection(this.brandsCollection)
                .read()
                .then(function (brands) {
                    resolve(brands);
                })
                .catch(function (err) {
                    reject(err);
                });
        });
    }
    loadProducts (productIds = null) {
        return new Promise((resolve, reject) => {
            this.perpage = this.getPerpage();
            this.currentLimit = this.perpage * 3;
            if (productIds) productIds = productIds.toString();
            $.ajax({
                url: '/products/list',
                type: 'get',
                data: {
                    ids: productIds,
                    categories: this.currentCategory,
                    page: !productIds ? this.currentPage : '',
                    limit: !productIds ? this.currentLimit : '',
                    settings: `perpage:${this.perpage}`
                },
                success: (res) => {
                    this.products = res.items || [];
                    resolve();
                },
                error: (err) => {
                    reject()
                }
            });
        })
    }
    loadProductsByCategory (catId = null) {
        return new Promise((resolve, reject) => {
            this.perpage = this.getPerpage();
            this.currentCategory = catId;
            if (!catId) {
                return null;
            }
            $.ajax({
                url: '/products/list',
                type: 'get',
                data: {
                    categories: this.currentCategory,
                    page: this.currentPage,
                    limit: this.currentLimit,
                    settings: `perpage:${this.perpage}`
                },
                success: (res) => {
                    this.products = res.items;
                    resolve();
                },
                error: (err) => {
                    reject(err);
                }
            });
        })
    }
    next (productIds = null) {
        return new Promise((resolve, reject) => {
            this.perpage = this.getPerpage();
            this.currentPage += 1;
            if (productIds) {
                return null;
            }
            $.ajax({
                url: '/products/list',
                type: 'get',
                data: {
                    categories: this.currentCategory,
                    limit: this.currentLimit,
                    page: this.currentPage,
                    settings: `perpage:${this.perpage}`
                },
                success: (res) => {
                    this.products = res.items;
                    resolve(this.products.length);
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
        return this;
    }
}