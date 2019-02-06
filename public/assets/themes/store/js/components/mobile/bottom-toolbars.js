components.bottom_toolbars = {};

// components.bottom_toolbars.open = function() {
//   var menu = document.getElementById('menu');
//   menu.open();
// };

components.bottom_toolbars.load = function(page) {
    console.log('page:', page)
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};