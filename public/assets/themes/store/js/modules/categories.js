'use strict'

class Categories extends Favorites {
    constructor () {
        super();
        this.currentCategory = null;
        this.categoriesStorage = 'localStorage';
        this.categoriesCollection = 'categories';
    }
    /* categories can multiple separated by comma (,) */
    setCategories (categories = '') {
        const cats = categories.split(',');
        this.categories = cats.map(x => x.trim());
        return this;
    }
    disableCategories () {
        this.currentCategory = '';
        return this;
    }
    updateCategoriesItems (categories) {
        const storage = this.storage(this.categoriesStorage);
        storage
            .collection('categories_has_loaded')
            .read(null, false)
            .then((hasLoaded) => {
                console.log(hasLoaded)
                const categoriesStorage = storage.collection(this.categoriesCollection);
                const hasChilds = $('#category-items')[0].childNodes.length;
                if (!hasLoaded || hasChilds === 0) {
                    categoriesStorage
                        .read()
                        .then((items) => {
                            for (let i of items) {
                                let htmlInner = '';
                                const parent = _.result(i, 'parent', {});
                                const childs = _.result(i, 'childs', null);
                                if (childs) {
                                    htmlInner = `<ons-list-header>${parent.name}</ons-list-header>`;
                                    for (let c of childs) {
                                        htmlInner += `<ons-list-item onclick="components.products.load('products.template', '${c.id}')">`;
                                        htmlInner += c.name;
                                        htmlInner += `</ons-list-item>`;
                                    }
                                    $('#category-items').append(htmlInner);
                                } else {
                                    htmlInner = `<ons-list-item>${parent.name}</ons-list-item>`;
                                }
                            }
                            storage.collection('categories_has_loaded').upsert('true');
                        });
                }
            });
    }
    getCategories () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/categories/list',
                type: 'get',
                success: (res) => {
                    localStorage.setItem('categories', JSON.stringify(res.items));
                    resolve(res.items);
                },
                error: (err) => {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }
}