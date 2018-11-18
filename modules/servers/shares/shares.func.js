'use strict'

const docs = use('modules/globals/static/documentation/shares.docs')
const Randomize = use('modules/globals/libs/randomize.lib')
const md5 = use('md5')
const ShortLink = use('ShortLink.Model')
const domain = 'http://share.rohman.web.id'

module.exports = {
    main: async (request, response) => {
        response.render('shares/index')
    },
    docs: async (request, response) => {
        response.render('docs/index', docs.publish())
    },
    apidocs: async (request, response) => {
        response.json(docs.publish())
    },
    newShare: async (request, response) => {
        try {
            const {url} = request.validInput
            if (url && url.length > 0) {
                const md5Url = md5(url)
                const isExists = await ShortLink.findOne({'hash': md5Url})
                if (!isExists) {
                    const newrec = await ShortLink.create({
                        'is_anonim': 1,
                        'url': url,
                        'uniq_code': Randomize.get(7),
                        'hash': md5Url,
                        'total_visit': 0,
                        'created_at': new Date()
                    })
                    response.send(domain + '/' + newrec.uniq_code)
                } else {
                    response.send(domain + '/' + isExists.uniq_code)
                }
            } else {
                throw new Error('invalid url')
            }
        } catch (e) {
            response
                .status(400)
                .send(e.message)
        }
    },
    goToUrl: async (request, response) => {
        try {
            const val = request.params
            const uniqCode = val ? val.uniq_code : false
            if (!uniqCode) {
                throw new Error('required uniq code')
            }
            const q = await ShortLink.findOne({'uniq_code': uniqCode})
            const linkTo = q ? q.url : false
            if (!linkTo) {
                throw new Error('invalid url')
            }
            response.redirect(linkTo)
        } catch (e) {
            response
                .status(400)
                .send(e.message)
        }
    }
}
