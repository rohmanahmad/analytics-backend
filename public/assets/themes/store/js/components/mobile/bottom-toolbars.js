components.bottom_toolbars = {};

components.bottom_toolbars.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('categories');
  content.load(page)
    .then(menu.close.bind(menu));
};