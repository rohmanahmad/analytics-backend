'use strict'

class ModelsLib {
    constructor (modelname, dsn) {
        const Model = use(modelname)
        return new Model(dsn).model()
    }
}

module.exports = ModelsLib
