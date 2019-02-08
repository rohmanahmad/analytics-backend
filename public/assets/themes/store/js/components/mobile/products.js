components.products = {};

components.products.load = function(page, catId) {
    var content = document.getElementById('content');
    var menu = document.getElementById('categories');
    content.load(page)
        .then(menu.close.bind(menu));
};

class Products {
    constructor () {
        this.categories = []
    }
    /* categories can multiple separated by comma (,) */
    setCategories (categories = '') {
        const cats = categories.split(',');
        this.categories = cats.map(x => x.trim());
        return this;
    }

    loadProducts (productIds = null) {
        if (productIds) {
            return null;
        }
        $.ajax({
            url: ''
        })
    }
}