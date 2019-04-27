'use strict'

const Models = use('Models')
const _ = use('_')

const Vocabularies = new Models().model('Vocabularies.Model')

class SentencesLib {
    constructor (sentences = '') {
        this.sentences = sentences
    }

    fixSentences () {
        return this.sentences
        // hapus perulangan karakter yang tidak diperlukan
            .replace(/\,{2,}/g, ',')
            .replace(/\.{2,}/g, '.')
            .replace(/\!{2,}/g, '!')
            .replace(/\?{2,}/g, '?')
            .replace(/\:{2,}/g, ':')
            .replace(/\;{2,}/g, ';')
        // tambah spasi di belakang karakter
            .replace(/\,/g, ', ')
            .replace(/\./g, '. ')
            .replace(/\!/g, '! ')
            .replace(/\?/g, '? ')
            .replace(/\:/g, ': ')
            .replace(/\;/g, '; ')
        // replace multiple spaces
            .replace(/ {2,}/g, ' ')
    }

    async process () {
        // ekstrak kalimat menggunakan semua symbol
        const allStopWords = this.fixSentences()
            .split(/\b/)
            .filter(x => x
                .trim()
                .match(/[\,\.\?\!\;\:\/]/))
            .map(x => x.trim())

        // ekstrak kalimat menggunakan tanda baca akhir sebuah kalimat
        const tokenizeB = this.fixSentences().split(/[\,\.\?\!\;\:\/ ]/)

        // filter hanya berupa huruf dan anka saja untuk cari di db
        const words = tokenizeB
            .filter(x => x.match(/[a-z0-9]/i))
            .map(x => x.toLowerCase())
        const criteria = {'id_keyword': {$in: words}}
        const raw = await Vocabularies.find(criteria, ['type', 'id_keyword']).exec()
        let obj = {}
        for (let i of raw) {
            obj[i.id_keyword] = i
        }
        let allWords = []
        let stopWordsIndex = 0
        for (let i in tokenizeB) {
            const k = tokenizeB[i]
            if (obj[k]) {
                allWords[i] = obj[k]
            } else {
                // jika '' berarti sebuah tanda baca sesuai variable tokenizeB
                if (k === '') {
                    const isSymbol = _.result(allWords[i - 1], 'is_symbol', null)
                    console.log(isSymbol)
                    if (!isSymbol) {
                        allWords[i] = {
                            id_keyword: allStopWords[stopWordsIndex],
                            is_symbol: true,
                            type: null,
                            id: null
                        }
                        stopWordsIndex += 1
                    }
                } else if (!k.match(/[a-z0-9]/i)) {
                    allWords[i] = {
                        id_keyword: k,
                        is_symbol: true,
                        type: null,
                        id: null
                    }
                } else {
                    allWords[i] = {
                        id_keyword: k,
                        type: null,
                        id: null
                    }
                }
            }
        }
        console.log(allWords)
        // memastikan semua keyword ketika di gabung sama dengan inputan
        const original = allWords
            .map(x => x.id_keyword)
            .join(' ')
            .trim()
            .replace(/ \./g, '.')
            .replace(/ \,/g, ',')
            .replace(/ \?/g, '?')
            .replace(/ \!/g, '!')
            .replace(/ \;/g, ';')
            .replace(/ \:/g, ':')
        const pattern = allWords
            .map(x => (x.is_symbol ? '|' : x.type))
            .join(' + ')
        const perkalimat = _.filter(
            original
                .split(/[\.\?\!\;]/)
                .map(x => _.compact(
                    x
                        .split(',')
                        .map(o => o.trim())
                )),
            function (x) {
                return x.length > 0
            }
        )
        return {original, perkalimat, pattern, allWords}
    }
}

module.exports = SentencesLib
