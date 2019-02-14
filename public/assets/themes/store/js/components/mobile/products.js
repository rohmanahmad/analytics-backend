console.log('product loaded')
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
        this.favorites = this.getFavorites();
        this.shopping_carts = this.getShoppingCarts();
    }
    /* categories can multiple separated by comma (,) */
    setCategories (categories = '') {
        const cats = categories.split(',');
        this.categories = cats.map(x => x.trim());
        return this;
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
    // end of shopping carts

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
                            const k = String(x.id);
                            r[k] = x.name;
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
        this.loadBrands();
        let listProducts = '';
        let myfavorites = this.getFavorites();
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
                const productId = product.product_id;
                const cart = this.shopping_carts.indexOf(productId) > -1 ? 'zmdi-shopping-cart' : '';
                const isFavorited = myfavorites.indexOf(productId) > -1 ? 'zmdi-favorite' : '';
                const price = 'IDR ' + _.result(product, 'prices.price', 0).toLocaleString();
                const brandname = _.result(this.brands, `${product.brand}`);
                const brandTag = brandname ? `<div class="__product_brand">${brandname}</div>` : '';
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
                            <img src="${mainImg}" class="__product_image" id="mainimage_${productId}" alt="${product.name}"/>
                        </div>
                        <div class="__product_image_others" data-id="${productId}">
                            <img class="list __list_image_other __cursor" src="${mainImg || ''}" alt=""/>
                            <img class="list __list_image_other __cursor" src="${imgs[0] || ''}" alt=""/>
                            <img class="list __list_image_other __cursor" src="${imgs[1] || ''}" alt=""/>
                            <img class="list __list_image_other __cursor" src="${imgs[2] || ''}" alt=""/>
                            <img class="list __list_image_other __cursor" src="${imgs[3] || ''}" alt=""/>
                        </div>
                        <div class="__product_title">${name}</div>
                        <div class="__product_section_1">
                            <div class="__product_cart">
                                <i class="zmdi zmdi-shopping-cart-plus __cursor ${cart}" data-id="${productId}"></i>
                            </div>
                            <div class="__product_price">
                                ${priceBefore}
                                <span class="__product_current_price" id="${productId}">${price}</span>
                                ${brandTag}
                                ${discountHtml}
                            </div>
                        </div>
                        <div class="__product_stars" id="${productId}">
                            <i class="zmdi zmdi-favorite-outline __product_favorite __cursor ${isFavorited}" data-id="${productId}"></i>
                            <span class="__product_favorite __product_favorite_count">${favorites}</span>
                            
                            ${this.getStartsHtml(stars)}
                        </div>
                    </div>
                </ons-col>`;
            }
            listProducts += htmlProduct.replace('__list_products__', rowlist);
        }
        $('#product_list_items').append(listProducts);
        this.registerImageChanger('img.__list_image_other');
        this.registerFavoritedEvent('i.__product_favorite');
        this.registerCartEvent('.__product_cart > i');
    }
    // utils
    getPerpage () {
        const {width} = this.getPageDimension();
        const devided = width / this.productWidth;
        return Math.round(devided);
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
    toggleActive (instance, selector) {
        console.log('toggle active favorites');
        const prdId = $(instance).data('id');
        const countInstance = $(`#${prdId} > .__product_favorite_count`);
        const currentCount = parseInt(countInstance.html());
        let d = this.getFavorites();
        const pos = d.indexOf(prdId);
        if (pos > -1) {
            $(instance).removeClass(selector);
            d[pos] = null;
            countInstance.html(currentCount - 1);
            localStorage.setItem('favorites', _.compact(d).toString());
        } else {
            $(instance).addClass(selector);
            countInstance.html(currentCount + 1);
            this.setFavorite(prdId);
        }
    }
    registerFavoritedEvent (selector) {
        console.log('registering events...registerFavoritedEvent');
        const self = this;
        $(selector).click(function (e) {
            self.toggleActive(this, 'zmdi-favorite');
        });
        return this;
    }
    registerCartEvent (selector) {
        console.log('registering events...registerCartEvent');
        const self = this;
        $(selector).click(function (e) {
            const prdId = $(this).data('id');
            if (prdId) {
                if (self.shopping_carts.indexOf(prdId) <= -1) {
                    self.shopping_carts.push(prdId);
                    self.addToShoppingCarts();
                    $(this).addClass('zmdi-shopping-cart');
                } else {
                    console.log('this product already exists on your shopping cart');
                }
            }
        });
        return this;
    }
    registerImageChanger (selector) {
        console.log('registering events...registerImageCanger');
        $(selector).click(function (e) {
            const prdId = $(this).parent().data('id');
            const currentImg = $(this).attr('src');
            const mainImage = $(`#mainimage_${prdId}`);
            mainImage.attr('src', currentImg);
        });
        return this;
    }
}

let P = new Products();
P
    .loadBrands()
    .loadProducts();
    // .registerFavoritedEvent('#favorited')
    // .registerCartEvent('#addtocart')
    // .registerImageChanger('#changethis');

components.products = {};
components.products.load = function(page, catId) {
    console.log('load product');
    P = new Products();
    const content = document.getElementById('content');
    const menu = document.getElementById('categories');
    if (page === 'toolbars.favorites.template') {
        const ids = P.getFavorites();
        P.loadProducts(ids);
    } else if (catId) {
        P.loadProductsByCategory(catId);
    } else {
        P.loadProducts();
    }
    setActivePage(page); // mobile.js
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
