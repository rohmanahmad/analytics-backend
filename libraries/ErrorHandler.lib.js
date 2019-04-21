'use strict'

module.exports = function (err, req, res, next) {
    if (err) {
        res
            .status(500)
            .json({
                'status': 500,
                'message': err.message
            })
    }
}
