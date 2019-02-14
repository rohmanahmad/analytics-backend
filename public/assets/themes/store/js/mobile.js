'use strict'
console.log('mobile loaded')
if (!localStorage) {
    alert('localstorage doesnt support');
}
var components = window.components;
const pages = {
    'home.template': '#toolbar-home',
    'toolbars.favorites.template': '#toolbar-favorites',
    'toolbars.carts.template': '#toolbar-carts',
    'toolbars.coupons.template': '#toolbar-coupons',
    'toolbars.chats.template': '#toolbar-chats',
}
window.components = {};
var setActivePage = (page) => {
    const selector = pages[page];
    const activeWindow = [
      selector,
      page
    ];
    $(selector).prop('checked', true);
    localStorage.setItem('active_window', activeWindow.toString());
}