'use strict'

const {loadModelConfig} = use('/Core')

class BaseController {
    // code here for base
    async setupModel (modelName = '') {
        try {
            const model = await loadModelConfig(modelName)
            return model
        } catch (err) {
            debuglog.error(err)
        }
    }
}

module.exports = BaseController
