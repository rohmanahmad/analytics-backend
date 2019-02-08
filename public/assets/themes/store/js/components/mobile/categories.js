components.categories = {};
var categories = components.categories;

categories.open = function () {
  initialItems();
  var menu = document.getElementById('categories');
  menu.open();
};

categories.load = function (page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('categories');
  content.load(page)
    .then(menu.close.bind(menu));
};

function initialItems () {
  const catItems = localStorage.getItem('categories');
  if (!catItems) {
    getCategories()
      .then((res) => {
        updateItems(res);
      });
  } else {
    updateItems();
  }
}

function updateItems (categories) {
  const hasLoaded = localStorage.getItem('categories_has_loaded');
  const hasChilds = $('#category-items')[0].childNodes.length
  if (!hasLoaded || hasChilds === 0) {
    const items = categories ? categories : JSON.parse(localStorage.getItem('categories', []));
    for (let i of items) {
      let htmlInner = '';
      const parent = _.result(i, 'parent', {});
      const childs = _.result(i, 'childs', null);
      if (childs) {
        htmlInner = `<ons-list-header>${parent.name}</ons-list-header>`;
        for (let c of childs) {
          htmlInner += `<ons-list-item onclick="components.products.load('products.template', '${c.id}')">${c.name}</ons-list-item>`
        }
        $('#category-items').append(htmlInner);
      } else {
        htmlInner = `<ons-list-item>${parent.name}</ons-list-item>`;
      }
    }
    localStorage.setItem('categories_has_loaded', 'true');
  }
}

function getCategories () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/categories/list',
      type: 'get',
      success: (res) =>{
        localStorage.setItem('categories', JSON.stringify(res.items));
        resolve(res.items);
      },
      error: (err) => {
        console.log(err);
        reject(err);
      }
    });
  });
}