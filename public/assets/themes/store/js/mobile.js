'use strict'
class MobilePage extends Products {
    constructor () {
        super();
        this.perpage = 2;
        this.productWidth = 170 + 1; // 1 for border or other
        this.currentLimit = 20;
        this.currentPage = 0;
        this.content_selector = '#products_list_items';
    }
    setContentSelector (selector = '#products_list_items') {
        this.content_selector = selector;
        return this;
    }
    getStarsHtml (count) {
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
        const brands = window.variables.brands || {};
        const shoppingCarts = window.variables.shopping_carts || [];
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
                const cart = shoppingCarts.indexOf(productId) > -1 ? 'zmdi-shopping-cart' : '';
                const isFavorited = myfavorites.indexOf(productId) > -1 ? 'zmdi-favorite' : '';
                const price = 'IDR ' + _.result(product, 'prices.price', 0).toLocaleString();
                const brandname = _.result(brands, `${product.brand}`);
                const brandTag = brandname ? `<div class="__product_brand">${brandname}</div>` : '';
                const discountKey = _.result(product, 'prices.discount.type', null);
                const discountVal = _.result(product, 'prices.discount.value', null);
                const discountHtml = (discountVal > 0 && discountKey === 'percent') ? '<div class="__product_disc">20%</div>' : '';
                let priceBefore = price + discountKey === 'percent' ? (price * discountVal / 100) : discountVal;
                priceBefore = priceBefore > 0 ? `<span class="__product_price_before_dics">IDR ${priceBefore}</span>` : '';
                const mainImg = product.images.main;
                let imgs = product.variants.map(x => _.result(x, 'images[0].small', ''));
                imgs = imgs.map(x => `<img class="list __list_image_other __cursor" src="${x}" alt=""/>`)
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
                            ${imgs[0] || ''}
                            ${imgs[1] || ''}
                            ${imgs[2] || ''}
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
                            
                            ${this.getStarsHtml(stars)}
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
        const brands = window.variables.brands || {};
        for (const sq of products) {
            const product = sq[0];
            const productId = product.product_id;
            const price = _.result(product, 'prices.price', 0);
            const brandname = _.result(brands, `${product.brand}`);
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
            htmlProduct += `<ons-list-item modifier="inset" class="__b-border" id="cart-${productId}" data-id="${productId}">`;
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
                        <input class="text-input text-input--material __carts_prices_qty" value="1" type="number" id="input_${productId}">
                        <i class="zmdi zmdi-minus __cursor __btn_minus"></i>
                        <i class="zmdi zmdi-plus __cursor __btn_plus"></i>
                    </p>
                    <p class="__carts_prices">
                        <span class="__carts_idr">IDR</span>
                            ${price.toLocaleString()}
                            x
                            <b class="__current_total" id="current_total_${productId}">1</b>
                    </p>
                    <p>
                        <i class="zmdi zmdi-delete __cursor __btn_delete"></i>
                    </p>
                </div>
            </ons-col>`;
            htmlProduct += '</ons-row>';
            htmlProduct += `</ons-list-item>`;
            this.carts_details.push({
                id: productId,
                price,
                qty: 1,
                opt: {}
            });
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
        this.setCartsDetails(); // carts.js
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
    registerCartEvent (selector) {
        console.log('registering events...registerCartEvent');
        let shoppingCarts = window.variables.shopping_carts || [];
        const addToShoppingCarts = this.addToShoppingCarts;
        $(selector).click(function (e) {
            const prdId = $(this).data('id');
            if (prdId) {
                if (shoppingCarts.indexOf(prdId) <= -1) {
                    shoppingCarts.push(prdId);
                    addToShoppingCarts();
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
    registerFavoritedEvent (selector) {
        console.log('registering events...registerFavoritedEvent');
        const self = this;
        $(selector).click(function (e) {
            self.toggleActive(this, 'zmdi-favorite');
        });
        return this;
    }
    registerCartsListeners () {
        $('.__btn_minus').click(function (e) {
            const prdId = $(this).parent().data('id');
            const input = $(`#input_${prdId}`);
            let current = parseInt(input.val());
            current = current - 1;
            if (current >= 1) {
                input.val(current);
                $(`#current_total_${prdId}`).html(current);
            }
            console.log('minus', current);
        })
        $('.__btn_plus').click(function (e) {
            const prdId = $(this).parent().data('id');
            const input = $(`#input_${prdId}`);
            let current = parseInt(input.val());
            current += 1;
            input.val(current);
            $(`#current_total_${prdId}`).html(current);
            console.log('plus', current);
        })
    }
    setDefaultVariables () {
        window.variables.brands = this.getBrands();
        window.variables.shopping_carts = this.getShoppingCarts();
        window.variables.categories = this.getCategories();
        return this;
    }
}

window.components = window.components || {};
window.variables = window.variables || {};
window.variables.brands = window.variables.brands || {};
window.variables.shopping_carts = window.variables.shopping_carts || [];
window.variables.categories = window.variables.categories || [];

if (!localStorage) {
    alert('localstorage doesnt support');
}
var components = window.components;
const pages = {
    'products.template': '#toolbar-none',
    'home.template': '#toolbar-home',
    'toolbars.favorites.template': '#toolbar-favorites',
    'toolbars.carts.template': '#toolbar-carts',
    'toolbars.coupons.template': '#toolbar-coupons',
    'toolbars.chats.template': '#toolbar-chats',
}
var setActivePage = (page) => {
    const selector = pages[page];
    const activeWindow = [
      selector,
      page
    ];
    $(selector).prop('checked', true);
    localStorage.setItem('active_window', activeWindow.toString());
}

let P = new MobilePage();

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
    P = new MobilePage();
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
        // console.log('(favorites)', ids);
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
        // console.log('(carts)', ids);
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
    P
    .loadBrands()
    .setDefaultVariables();
    components.bottom_toolbars.load(currentWindow[1]);
}, 1 * 1000);

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