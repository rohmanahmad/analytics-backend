(function (w, d, $) {
    'use strict';
    let fn = {};
    const pages = {
        'home.template': '#toolbar-home',
        'toolbars.favorites.template': '#toolbar-favorites',
        'toolbars.carts.template': '#toolbar-carts',
        'toolbars.coupons.template': '#toolbar-coupons',
        'toolbars.chats.template': '#toolbar-chats',
    }
    fn.setActivePage = function(templateid) {
        const selector = pages[templateid];
        const activeWindow = [
          selector,
          templateid
        ];
        $(selector).prop('checked', true);
        localStorage.setItem('active_window', activeWindow.toString());
    }
    fn.load = function (templateid) {
        if (!templateid) throw new Error('No template Id');
        const content = document.getElementById('body');
        this.setActivePage(templateid); // mobile.js
        content
            .load(templateid)
            .then(menu.close.bind(menu));
    }
    // registering functions on window
    window.fn = fn;
    // initial load
    let currentWindow = localStorage.getItem('active_window');
    if (!currentWindow) {
        currentWindow = '#toolbar-home,home.template';
    }
    currentWindow = currentWindow.split(',').map(x => x.trim());
    if (_.compact(currentWindow).length < 2) {
        currentWindow = ['#toolbar-home','home.template'];
    }
    setTimeout(function () {
        fn.load(currentWindow[1]);
    }, 1 * 1000);
})(window, document, jQuery);
