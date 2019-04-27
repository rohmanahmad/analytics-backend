'use strict'

const Base = require('./_base.model')

class OngkosKirimIdCities extends Base {
    get collection () {
        return 'ongkos_kirim_id_cities'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'id': String,
            'city_id': Number,
            'country_id': Number,
            'state_id': Number,
            'city_name': String,
            'city_name_jne': String,
            'city_name_pos': String,
            'is_shipping_from': Number,
            'allow_shipping': Number,
            'jne_code': String,
            'last_update': Date,
            'priority_order': Number,
            'real_city_id': Number,
            'kodepos': String,
            'kodepos_term': String,
            'kodepos_result': [],
            'is_cron_kodepos': Number,
            'kodepos_indonesia': String,
            'kodepos_indonesia_new': String,
            'kodepos_indonesia_term': String,
            'kodepos_indonesia_result': [],
            'is_cron_kodepos_indonesia': Number,
            'is_cron_kodepos_indonesia_new': Number,
            'flag_unknown': Number,
            'cron_wahana_tarif_asal_done': Number,
            'cron_wahana_tarif_tujuan_done': Number,
            'wahana_tarif_asal': String,
            'wahana_tarif_tujuan': Number,
            'dhl_postcode': Number,
            'dhl_loc_name': String,
            'is_dhl_update': Number,
            'dhl_city': Number,
            'wahana_city_id_last': Number,
            'wahana_kec_id_last': Number,
            'sicepat_origin_code': String,
            'sicepat_destination_code': String,
            'is_sicepat_update': Number,
            'sicepat_city_update': Number,
            'jnt_origin_dest': String,
            'is_jnt_update': Number,
            'jnt_city_update': Number,
            'tikicode': String,
            'tikikotaname': String,
            'tikiambigu': Number,
            'tikiprogress': Number,
            'jne_to_city_counter': Number,
            'jne_to_kecamatan_counter': Number,
            'jne_progress': Number,
            'tikicodeapi': String,
            'tikinameapi': String,
            'is_tiki_update': Number,
            'tiki_city_update': Number,
            'is_pos_update': Number,
            'pos_city_update': Number,
            'is_jne_alltoone': Number,
            'jne_alltoone_city': Number,
            'is_jnt_alltoone': Number,
            'jnt_alltoone_city': Number,
            'is_sicepat_alltoone': Number,
            'sicepat_alltoone_city': Number,
            'is_tiki_alltoone': Number,
            'tiki_alltoone_city': Number,
            'is_pos_alltoone': Number,
            'pos_alltoone_city': Number,
            'is_wahana_alltoone': Number,
            'wahana_alltoone_city': Number,
            'is_wahana_update': Number,
            'lionparcel_code': String,
            'lionparcel_to_city_counter': Number,
            'lionparcel_to_kecamatan_counter': Number,
            'lionparcel_progress': Number
        }
    }
}

module.exports = OngkosKirimIdCities
