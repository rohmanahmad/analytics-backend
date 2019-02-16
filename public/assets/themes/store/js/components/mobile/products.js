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
        this.content_selector = '#products_list_items';
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
    setContentSelector (selector = '#products_list_items') {
        this.content_selector = selector;
        return this;
    }
    // products funcs
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
        console.log('(products)', productIds);
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
                    resolve();
                },
                error: (err) => {
                    reject(err);
                }
            });
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
        products = products || this.products || [];
        const contentSelector = this.content_selector;
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
        $(contentSelector).append(listProducts);
        this.registerImageChanger('img.__list_image_other');
        this.registerFavoritedEvent('i.__product_favorite');
        this.registerCartEvent('.__product_cart > i');
    }
    listingCarts (products) {
        products = products || this.products || [];
        const contentSelector = this.content_selector;
        let htmlProduct = '';
        let carts = {};
        for (const sq of products) {
            const product = sq[0];
            const productId = product.product_id;
            const price = _.result(product, 'prices.price', 0);
            const brandname = _.result(this.brands, `${product.brand}`);
            const brandTag = brandname || '';
            const discountKey = _.result(product, 'prices.discount.type', null);
            const discountVal = _.result(product, 'prices.discount.value', null);
            const discountHtml = (discountVal > 0 && discountKey === 'percent') ? `<div class="__product_disc">${discountVal}%</div>` : '';
            let priceBefore = price + (discountKey === 'percent' ? (price * discountVal / 100) : discountVal);
            priceBefore = priceBefore > 0 ? `<span class="__product_price_before_dics">IDR ${priceBefore}</span>` : '';
            const mainImg = product.images.main;
            // const imgs = product.variants.map(x => _.result(x, 'images[0].small', ''));
            // const stars = _.result(product, 'stars.count', 0);
            // const favorites = _.result(product, 'favorites.count', 0);

            let name = product.name.replace(/hijup/gi, '');
            name = name.length > 20 ? name.substring(0, 20) + '...' : name;
            carts[productId] = {
                price,
                qty: 1
            }
            htmlProduct += `<ons-list-item modifier="nodivider" id="cart-${productId}" data-id="${productId}">`;
            htmlProduct += '<ons-row>';
            htmlProduct += `
            <ons-col class="__carts_image_section">
                <div class="left">
                    <img class="list-item__thumbnail __carts_main_image" src="${mainImg}">
                </div>
            </ons-col>`;
            htmlProduct += `
            <ons-col>
                <div class="center __carts">
                    <p class="list-item__title __carts_title">
                        <span>${name}</span>
                    </p>
                    <p class="list-item__subtitle __carts_brand">
                        <span>${brandTag}</span>
                    </p>
                    <p class="list-item__subtitle __carts_notes">
                        <textarea class="textarea textarea--transparent" rows="2" placeholder="Add Notes"></textarea>
                    </p>
                </div>
            </ons-col>`;
            htmlProduct += `<ons-col class="__carts_price_section">
                <div class="center __carts">
                    <p class="" data-id="${productId}">
                        <input class="text-input text-input--material __carts_prices_qty" value="1" placeholder="qty" type="number">
                        <i class="zmdi zmdi-minus __cursor __btn_minus"></i>
                        <i class="zmdi zmdi-plus __cursor __btn_plus"></i>
                    </p>
                    <p class="__carts_prices">
                        <span class="__carts_idr">IDR</span> ${price.toLocaleString()}
                    </p>
                </div>
            </ons-col>`;
            htmlProduct += '</ons-row>';
            htmlProduct += `</ons-list-item>`;
        }
        htmlProduct += `
        <ons-list-header class="__carts_total_section">
            <span class="__carts_total">Total</span>
        </ons-list-header>
        <ons-list-item id="cart-total" data-id="">
            <ons-button modifier="large">Checkout</ons-button>
        </ons-list-item>`;
        $(contentSelector).html(htmlProduct);
        this.registerCartsListeners();
    }
    registerCartsListeners () {
        $('.__btn_minus').click(function (e) {
            console.log($(this).parent().data('id'));
            console.log('minus');
        })
        $('.__btn_plus').click(function (e) {
            console.log($(this).parent().data('id'));
            console.log('plus');
        })
    }
    // utils
    getPerpage () {
        if (this.selfSetting) {
            this.selfSetting = false;
            return this.perpage;
        }
        const {width} = this.getPageDimension();
        const devided = width / this.productWidth;
        return Math.round(devided);
    }
    setPerPage (n = 1) {
        this.perpage = n;
        this.selfSetting = true
        return this;
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
    .loadBrands();

const loadmore = () => {
    P
        .next()
        .then(function () {
            P
                .listingProducts();
        });
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
// products components
components.products = {};
components.products.load = function(page, catId) {
    console.log('(product)', page);
    P = new Products();
    const content = document.getElementById('content');
    const menu = document.getElementById('categories');
    if (catId) {
        P
            .setContentSelector('#products_list_items')
            .loadProductsByCategory(catId)
            .then(function () {
                P
                    .listingProducts();
            });
    } else {
        P
            .setContentSelector('#products_list_items')
            .loadProducts()
            .then(function () {
                P
                    .listingProducts();
            });
    }
    setActivePage(page); // mobile.js
    content.load(page)
        .then(menu.close.bind(menu));
};

// bottom toolbars
components.bottom_toolbars = {};
components.bottom_toolbars.load = function(page) {
    console.log('(toolbars)', page);
    const content = document.getElementById('content');
    const menu = document.getElementById('categories');
    if (page === 'toolbars.favorites.template') {
        const ids = P.getFavorites();
        console.log('(favorites)', ids);
        if (ids.length > 0) {
            P
                .setContentSelector('#favorites_list_items')
                .disableCategories()
                .loadProducts(ids)
                .then(function () {
                    P
                        .listingProducts();
                });
        }
    } else if (page === 'toolbars.carts.template') {
        const ids = P.getShoppingCarts();
        console.log('(carts)', ids);
        if (ids.length > 0) {
            P
                .setContentSelector('#carts_list_items')
                .disableCategories()
                .setPerPage(1)
                .loadProducts(ids)
                .then(function () {
                    P
                        .listingCarts();
                });
        }
    }
    setActivePage(page); // mobile.js
    content
        .load(page)
        .then(menu.close.bind(menu));
};

// initial first load after refresh page
let currentWindow = localStorage.getItem('active_window');
if (!currentWindow) {
  currentWindow = '#toolbar-home,home.template';
}
currentWindow = currentWindow.split(',').map(x => x.trim());
if (_.compact(currentWindow).length < 2) {
  currentWindow = ['#toolbar-home','home.template'];
}
setTimeout(function () {
    components.bottom_toolbars.load(currentWindow[1]);
}, 1 * 500);

// categories
components.categories = {};
let categories = components.categories;

categories.open = function () {
    initialCategoriesItems();
    const menu = document.getElementById('categories');
    menu.open();
};

categories.load = function (page) {
    const content = document.getElementById('content');
    const menu = document.getElementById('categories');
    setActivePage(page); // mobile.js
    content.load(page)
        .then(menu.close.bind(menu));
};

function initialCategoriesItems () {
  const catItems = localStorage.getItem('categoriess');
  if (!catItems) {
    P
        .getCategories()
        .then(function (res) {
            P
                .updateCategoriesItems(res);
        });
  } else {
    P
        .updateCategoriesItems();
  }
}
// initial categories items
setTimeout(initialCategoriesItems, 2 * 1000);