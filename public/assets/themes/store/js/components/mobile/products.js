class Products extends Page {
    constructor () {
        super();
        this.categories = [];
        this.perpage = 2;
        this.productWidth = 170 + 1; // 1 for border or other
        this.currentLimit = 20;
        this.currentPage = 0;
        this.brands = [];
        this.currentCategory = null;
    }
    /* categories can multiple separated by comma (,) */
    setCategories (categories = '') {
        const cats = categories.split(',');
        this.categories = cats.map(x => x.trim());
        return this;
    }

    loadBrands () {
        if (this.brands.length === 0) {
            const brands = localStorage.getItem('brands')
            if (!brands) {
                $.ajax({
                    url: '/brands/list',
                    type: 'get',
                    data: {},
                    success: (res) => {
                        this.brands = _.reduce(res.items, (r, x) => {
                            r[x.id] = x.name;
                            return r;
                        }, {});
                        localStorage.setItem('brands', JSON.stringify(this.brands));
                    },
                    error: () => {
                        console.log('brands not loaded');
                    }
                });
            } else {
                this.brands = JSON.parse(brands);
            }
        }
        return this
    }

    loadProducts (productIds = null) {
        this.perpage = this.getPerpage();
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
                this.listingProducts(res.items);
            }
        });
        return this;
    }

    loadProductsByCategory (catId = null) {
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
                this.listingProducts(res.items);
            }
        });
        return this;
    }

    next (productIds = null) {
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
                this.listingProducts(res.items);
            }
        });
        return this;
    }

    getStartsHtml (count) {
        let starshtml = '';
        for (let x = 1; x <= 5; x++) {
            let lastClass = '';
            if (x === count) {
                if (x === 5) {
                    lastClass = '__last_star';
                }
                starshtml += `<span class="zmdi zmdi-star __yellow_star ${lastClass}"></span>`;
            } else {
                if (count - x === 0.5) {
                    starshtml += '<span class="zmdi zmdi-star-half __yellow_star"></span>';
                } else if (x > count) {
                    if (x === 5) {
                        lastClass = '__last_star';
                    }
                    starshtml += `<span class="zmdi zmdi-star-outline __yellow_star ${lastClass}"></span>`;
                } else {
                    if (x === 5) {
                        lastClass = '__last_star';
                    }
                    starshtml += `<span class="zmdi zmdi-star __yellow_star ${lastClass}"></span>`;
                }
            }
        }
        return starshtml;
    }

    listingProducts (products) {
        let listProducts = '';
        for (const sq of products) {
            let htmlProduct = `
            <ons-list-item modifier="nodivider" class="__list_product __no_paddings">
                <ons-row class="__product_row_items">
                    __list_products__
                </ons-row>
            </ons-list-item>
            `;
            let rowlist = '';
            for (let product of sq) {
                const price = 'IDR ' + _.result(product, 'prices.price', 0).toLocaleString();
                const brandname = this.brands[product.brand];
                const discountKey = _.result(product, 'prices.discount.type', null);
                const discountVal = _.result(product, 'prices.discount.value', null);
                const discountHtml = (discountVal > 0 && discountKey === 'percent') ? '<div class="__product_disc">20%</div>' : '';
                let priceBefore = price + discountKey === 'percent' ? (price * discountVal / 100) : discountVal;
                priceBefore = priceBefore > 0 ? `<span class="__product_price_before_dics">IDR ${priceBefore}</span>` : '';
                const mainImg = product.images.main;
                const imgs = product.variants.map(x => _.result(x, 'images[0].small', ''));
                const stars = _.result(product, 'stars.count', 0);
                const favorites = _.result(product, 'favorites.count', 0);

                let name = product.name.replace(/hijup/gi, '');
                name = name.length > 20 ? name.substring(0, 20) + '...' : name;
                rowlist += `
                <ons-col class="__list">
                    <div class="__product __product_border_radius">
                        <div class="__product_image" onclick="showpopup('${name}', '${price}')">
                            <img src="${mainImg}" class="__product_image" alt="${product.name}"/>
                        </div>
                        <div class="__product_image_others">
                            <img class="list" src="${imgs[0] || ''}" alt=""/>
                            <img class="list" src="${imgs[1] || ''}" alt=""/>
                            <img class="list" src="${imgs[2] || ''}" alt=""/>
                            <img class="list" src="${imgs[3] || ''}" alt=""/>
                        </div>
                        <div class="__product_title">${name}</div>
                        <div class="__product_section_1">
                            <div class="__product_cart">
                                <i class="zmdi zmdi-shopping-cart-plus"></i>
                            </div>
                            <div class="__product_price">
                                ${priceBefore}
                                <span class="__product_current_price">${price}</span>
                                <div class="__product_brand">${brandname}</div>
                                ${discountHtml}
                            </div>
                        </div>
                        <div class="__product_stars">
                            <i class="zmdi zmdi-favorite-outline __product_favorite"></i>
                            <span class="__product_favorite __product_favorite_count">${favorites}</span>
                            
                            ${this.getStartsHtml(stars)}
                        </div>
                    </div>
                </ons-col>`;
            }
            listProducts += htmlProduct.replace('__list_products__', rowlist);
        }
        $('#product_list_items').append(listProducts);
    }
    // utils
    getPerpage () {
        const {width} = this.getPageDimension();
        const devided = width / this.productWidth;
        return Math.round(devided);
    }
}

const P = new Products();
P.loadBrands();
P.loadProducts();

components.products = {};
components.products.load = function(page, catId) {
    console.log('load product');
    var content = document.getElementById('content');
    var menu = document.getElementById('categories');
    if (catId) {
        P.loadProductsByCategory(catId);
    } else {
        P.loadProducts();
    }
    content.load(page)
        .then(menu.close.bind(menu));
};

const loadmore = () => {
    P.next();
}

const showpopup = (name, price) => {
    ons.openActionSheet({
        title: `<b>${name}</b>`,
        cancelable: true,
        buttons: [
          {
            label: `Tambah Keranjang`,
            icon: 'md-shopping-cart"'
          },
          {
            label: 'Lihat',
            icon: 'md-link'
          },
          {
            label: 'Batal',
            icon: 'md-close'
          }
        ]
    })
    .then(function (index) {
        switch (index) {
            case 0:
                console.log('tambahkan ke keranjang');
                break;
            case 1:
                console.log('lihat detail');
                break;
        
            default:
                break;
        }
    });
}