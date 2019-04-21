'use strict'

module.exports = [
    // server 1
    {name: 'UsersAccounts.model', collection: 'user_accounts', server: 'server1'},
    // server 2
    {name: 'SentencePatterns.model', collection: 'sentence_patterns', server: 'server2'},
    {name: 'Vocabularies.model', collection: 'vocabularies', server: 'server2'},
    {name: 'ShortLink.model', collection: 'short_link', server: 'server2'},
    {name: 'InvitationContacts.model', collection: 'invitation_contacts', server: 'server2'},
    // server 3
    {name: 'RequestLogs.model', collection: 'request_logs', server: 'server3'},
    // server 4
    {name: 'StoreCategories.model', collection: 'store_categories', server: 'server4'},
    {name: 'StoreProducts.model', collection: 'store_products', server: 'server4'},
    {name: 'StoreProductVariants.model', collection: 'store_product_variants', server: 'server4'},
    {name: 'StoreProductPrices.model', collection: 'store_product_prices', server: 'server4'},
    {name: 'StoreProductBrands.model', collection: 'store_product_brands', server: 'server4'},
    {name: 'StoreProvince.model', collection: 'store_province', server: 'server4'},
    // server 5
    {name: 'RawHijupProducts.model', collection: 'raw_hijup_products', server: 'server5'},
    {name: 'RawHijupProducts.model', collection: 'raw_hijup_products_detail', server: 'server5'},
    {name: 'RawHijupCategories.model', collection: 'raw_hijup_categories', server: 'server5'},
    {name: 'OngkosKirimIdExpeditions.model', collection: 'ongkos_kirim_id_expeditions', server: 'server5'},
    {name: 'OngkosKirimIdCities.model', collection: 'ongkos_kirim_id_cities', server: 'server5'},
    {name: 'OngkosKirimIdKecamatan.model', collection: 'ongkos_kirim_id_kecamatan', server: 'server5'},
    {name: 'OngkosKirimIdCountries.model', collection: 'ongkos_kirim_id_countries', server: 'server5'},
    {name: 'OngkosKirimIdPrice.model', collection: 'ongkos_kirim_id_price', server: 'server5'}
]
