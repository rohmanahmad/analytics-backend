'use strict'

$(function(){
    // Initialization code
    window.components = {};
    var components = window.components;
    if (!localStorage) {
        alert('localstorage doesnt support');
        return null
    }
    $.getScript('/assets/themes/store/js/components/mobile/categories.js');
    $.getScript('/assets/themes/store/js/components/mobile/bottom-toolbars.js');
    $.getScript('/assets/themes/store/js/components/mobile/products.js');
});