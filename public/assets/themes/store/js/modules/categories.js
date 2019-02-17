'use strict'

class Categories extends Favorites {
    constructor () {
        super();
        this.categories = [];
        this.currentCategory = null;
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
        const hasLoaded = localStorage.getItem('categories_has_loaded');
        const hasChilds = $('#category-items')[0].childNodes.length;
        if (!hasLoaded || hasChilds === 0) {
            const items = categories ? categories : JSON.parse(localStorage.getItem('categories', []));
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
            localStorage.setItem('categories_has_loaded', 'true');
        }
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