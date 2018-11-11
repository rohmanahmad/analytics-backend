'use strict'

$(document).ready(function () {
    console.log('work....')
    // register all listener
    $('#btn-get-link').click(getLink)
})

function getLink () {
    const url = $('#input-url').val()
    if (url && url.length > 0) {
        const res = $('#url-result')
        res.text('please wait...')
        $.ajax({
            'url': 'new',
            'type': 'POST',
            'data': { url },
            'success': function (data) {
                res.text(data)
            },
            'error': function (e) {
                alert(e.message)
            }
        })
    }
}
