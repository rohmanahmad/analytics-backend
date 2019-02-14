console.log('bottom_toolbars loaded');
components.bottom_toolbars = {};

components.bottom_toolbars.load = function(page) {
  console.log('load bottom toolbars');
  const content = document.getElementById('content');
  const menu = document.getElementById('categories');
  setActivePage(page); // mobile.js
  content
    .load(page)
    .then(menu.close.bind(menu));
};

let currentWindow = localStorage.getItem('active_window');
if (!currentWindow) {
  currentWindow = '#toolbar-home,home.template';
}
currentWindow = currentWindow.split(',').map(x => x.trim());
if (_.compact(currentWindow).length < 2) {
  currentWindow = ['#toolbar-home','home.template'];
}
setTimeout(function () {
  if (currentWindow[1] === 'toolbars.favorites.template') {
    components.products.load(currentWindow[1]);
  } else {
    components.bottom_toolbars.load(currentWindow[1]);
  }
}, 1 * 1000);