const nameSpaces = {
    'Utils.Helper': './modules/globals/helpers/utils.helper',
    'Deps.Loader': './modules/globals/libs/deps.loader',
    'Model.Loader': './modules/globals/libs/model.loader',
    'Settings.Loader': './modules/globals/libs/settings.loader',
    'Layer1AuthToken.Middleware': './modules/globals/middlewares/Layer1AuthToken.middleware',
    'ValidateInput.Middleware': './modules/globals/middlewares/ValidateInput.middleware',
    'Http.Listener': './modules/globals/listener/http'
}

module.exports = global.use = function (name) {
    const moduleName = nameSpaces[name] || false
    if (moduleName) {
        return require(moduleName)
    } else {
        return require('./' + name)
    }
}
