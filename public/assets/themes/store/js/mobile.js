'use strict'

$(function(){
    // Initialization code
    window.components = {}
    var components = window.components
    $.getScript('/assets/themes/store/js/components/mobile/leftmenu.js')
    $.getScript('/assets/themes/store/js/components/mobile/bottom-toolbars.js')

    $('ons-button#test').on('click', function(e) {
        ons.notification.alert('Button is tapped!');
    })
})