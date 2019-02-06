components.products = {};

components.products.load = function(page) {
    console.log(page);
    var content = document.getElementById('content');
    var menu = document.getElementById('categories');
    content.load(page)
        .then(menu.close.bind(menu));
};