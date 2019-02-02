'use strict'

class ModelsLib {
    constructor (dsn = null) {
        this.dsn = dsn
    }

    model (modelname) {
        const Model = use(modelname)
        return new Model(this.dsn).model()
    }
}

module.exports = ModelsLib
