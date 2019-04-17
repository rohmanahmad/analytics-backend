'use strict'

const Base = require('./_base.model')

class OngkosKirimIdKecamatan extends Base {
    get collection () {
        return 'ongkos_kirim_id_kecamatan'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'id': String,
            'kecamatan_id': Number,
            'country_id': Number,
            'state_id': Number,
            'city_id': Number,
            'kecamatan_name': String,
            'kecamatan_name_pos': String,
            'is_shipping_from': Number,
            'allow_shipping': Number,
            'jne_code': String,
            'last_update': Date,
            'kodepos': Number,
            'kodepos_term': String,
            'kodepos_result': [],
            'is_cron_kodepos': Number,
            'kodepos_indonesia': '',
            'kodepos_indonesia_new': Number,
            'kodepos_indonesia_term': String,
            'kodepos_indonesia_result': [],
            'is_cron_kodepos_indonesia': Number,
            'is_cron_kodepos_indonesia_new': Number,
            'flag_unknown': Number,
            'cron_wahana_tarif_tujuan_done': Number,
            'wahana_tarif_tujuan': Number,
            'sicepat_destination_code': String,
            'jnt_destination': String,
            'tikicode': String,
            'tikidaerahname': String,
            'tikiambigu': Number,
            'tikiprogress': Number,
            'is_jnt_update': Number,
            'tikicodeapi': String,
            'tikinameapi': String,
            'is_tiki_update': Number,
            'jntcodeupdate': String,
            'jntflag': Number,
            'jntbelumsama': Number,
            'lionparcel_code': String,
            'lionparcel_is_set_dest': Number
        }
    }
}

module.exports = OngkosKirimIdKecamatan
