/* eslint-disable no-undef */
'use strict'

const tag = `
    <div class="row" id="container1">
    </div>
`;

let main = {}

main.render = function () {
    $('#container-main').html(tag);
}

// xhr.send('GET', {
//     'url': 1
// })
// .then(function (res) {

// });
export default main
