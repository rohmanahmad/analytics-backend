components.leftmenu = {};

components.leftmenu.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

components.leftmenu.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};