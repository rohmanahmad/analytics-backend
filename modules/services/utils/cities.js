'use strict'

const cities = [
    {
        'id': 1,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Barat',
        'postal_code': 23681
    },
    {
        'id': 2,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Barat Daya',
        'postal_code': 23764
    },
    {
        'id': 3,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Besar',
        'postal_code': 23951
    },
    {
        'id': 4,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Jaya',
        'postal_code': 23654
    },
    {
        'id': 5,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Selatan',
        'postal_code': 23719
    },
    {
        'id': 6,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Singkil',
        'postal_code': 24785
    },
    {
        'id': 7,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Tamiang',
        'postal_code': 24476
    },
    {
        'id': 8,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Tengah',
        'postal_code': 24511
    },
    {
        'id': 9,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Tenggara',
        'postal_code': 24611
    },
    {
        'id': 10,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Timur',
        'postal_code': 24454
    },
    {
        'id': 11,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Aceh Utara',
        'postal_code': 24382
    },
    {
        'id': 12,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Agam',
        'postal_code': 26411
    },
    {
        'id': 13,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Alor',
        'postal_code': 85811
    },
    {
        'id': 14,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kota',
        'name': 'Ambon',
        'postal_code': 97222
    },
    {
        'id': 15,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Asahan',
        'postal_code': 21214
    },
    {
        'id': 16,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Asmat',
        'postal_code': 99777
    },
    {
        'id': 17,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Badung',
        'postal_code': 80351
    },
    {
        'id': 18,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Balangan',
        'postal_code': 71611
    },
    {
        'id': 19,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kota',
        'name': 'Balikpapan',
        'postal_code': 76111
    },
    {
        'id': 20,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kota',
        'name': 'Banda Aceh',
        'postal_code': 23238
    },
    {
        'id': 21,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kota',
        'name': 'Bandar Lampung',
        'postal_code': 35139
    },
    {
        'id': 22,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Bandung',
        'postal_code': 40311
    },
    {
        'id': 23,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Bandung',
        'postal_code': 40111
    },
    {
        'id': 24,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Bandung Barat',
        'postal_code': 40721
    },
    {
        'id': 25,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Banggai',
        'postal_code': 94711
    },
    {
        'id': 26,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Banggai Kepulauan',
        'postal_code': 94881
    },
    {
        'id': 27,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kabupaten',
        'name': 'Bangka',
        'postal_code': 33212
    },
    {
        'id': 28,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kabupaten',
        'name': 'Bangka Barat',
        'postal_code': 33315
    },
    {
        'id': 29,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kabupaten',
        'name': 'Bangka Selatan',
        'postal_code': 33719
    },
    {
        'id': 30,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kabupaten',
        'name': 'Bangka Tengah',
        'postal_code': 33613
    },
    {
        'id': 31,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Bangkalan',
        'postal_code': 69118
    },
    {
        'id': 32,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Bangli',
        'postal_code': 80619
    },
    {
        'id': 33,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Banjar',
        'postal_code': 70619
    },
    {
        'id': 34,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Banjar',
        'postal_code': 46311
    },
    {
        'id': 35,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kota',
        'name': 'Banjarbaru',
        'postal_code': 70712
    },
    {
        'id': 36,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kota',
        'name': 'Banjarmasin',
        'postal_code': 70117
    },
    {
        'id': 37,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Banjarnegara',
        'postal_code': 53419
    },
    {
        'id': 38,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Bantaeng',
        'postal_code': 92411
    },
    {
        'id': 39,
        'province': {
            'id': 5,
            'name': 'DI Yogyakarta'
        },
        'type': 'Kabupaten',
        'name': 'Bantul',
        'postal_code': 55715
    },
    {
        'id': 40,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Banyuasin',
        'postal_code': 30911
    },
    {
        'id': 41,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Banyumas',
        'postal_code': 53114
    },
    {
        'id': 42,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Banyuwangi',
        'postal_code': 68416
    },
    {
        'id': 43,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Barito Kuala',
        'postal_code': 70511
    },
    {
        'id': 44,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Barito Selatan',
        'postal_code': 73711
    },
    {
        'id': 45,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Barito Timur',
        'postal_code': 73671
    },
    {
        'id': 46,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Barito Utara',
        'postal_code': 73881
    },
    {
        'id': 47,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Barru',
        'postal_code': 90719
    },
    {
        'id': 48,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kota',
        'name': 'Batam',
        'postal_code': 29413
    },
    {
        'id': 49,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Batang',
        'postal_code': 51211
    },
    {
        'id': 50,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Batang Hari',
        'postal_code': 36613
    },
    {
        'id': 51,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Batu',
        'postal_code': 65311
    },
    {
        'id': 52,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Batu Bara',
        'postal_code': 21655
    },
    {
        'id': 53,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kota',
        'name': 'Bau-Bau',
        'postal_code': 93719
    },
    {
        'id': 54,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Bekasi',
        'postal_code': 17837
    },
    {
        'id': 55,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Bekasi',
        'postal_code': 17121
    },
    {
        'id': 56,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kabupaten',
        'name': 'Belitung',
        'postal_code': 33419
    },
    {
        'id': 57,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kabupaten',
        'name': 'Belitung Timur',
        'postal_code': 33519
    },
    {
        'id': 58,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Belu',
        'postal_code': 85711
    },
    {
        'id': 59,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Bener Meriah',
        'postal_code': 24581
    },
    {
        'id': 60,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Bengkalis',
        'postal_code': 28719
    },
    {
        'id': 61,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Bengkayang',
        'postal_code': 79213
    },
    {
        'id': 62,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kota',
        'name': 'Bengkulu',
        'postal_code': 38229
    },
    {
        'id': 63,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Bengkulu Selatan',
        'postal_code': 38519
    },
    {
        'id': 64,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Bengkulu Tengah',
        'postal_code': 38319
    },
    {
        'id': 65,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Bengkulu Utara',
        'postal_code': 38619
    },
    {
        'id': 66,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kabupaten',
        'name': 'Berau',
        'postal_code': 77311
    },
    {
        'id': 67,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Biak Numfor',
        'postal_code': 98119
    },
    {
        'id': 68,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Bima',
        'postal_code': 84171
    },
    {
        'id': 69,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kota',
        'name': 'Bima',
        'postal_code': 84139
    },
    {
        'id': 70,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Binjai',
        'postal_code': 20712
    },
    {
        'id': 71,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kabupaten',
        'name': 'Bintan',
        'postal_code': 29135
    },
    {
        'id': 72,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Bireuen',
        'postal_code': 24219
    },
    {
        'id': 73,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kota',
        'name': 'Bitung',
        'postal_code': 95512
    },
    {
        'id': 74,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Blitar',
        'postal_code': 66171
    },
    {
        'id': 75,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Blitar',
        'postal_code': 66124
    },
    {
        'id': 76,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Blora',
        'postal_code': 58219
    },
    {
        'id': 77,
        'province': {
            'id': 7,
            'name': 'Gorontalo'
        },
        'type': 'Kabupaten',
        'name': 'Boalemo',
        'postal_code': 96319
    },
    {
        'id': 78,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Bogor',
        'postal_code': 16911
    },
    {
        'id': 79,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Bogor',
        'postal_code': 16119
    },
    {
        'id': 80,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Bojonegoro',
        'postal_code': 62119
    },
    {
        'id': 81,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Bolaang Mongondow (Bolmong)',
        'postal_code': 95755
    },
    {
        'id': 82,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Bolaang Mongondow Selatan',
        'postal_code': 95774
    },
    {
        'id': 83,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Bolaang Mongondow Timur',
        'postal_code': 95783
    },
    {
        'id': 84,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Bolaang Mongondow Utara',
        'postal_code': 95765
    },
    {
        'id': 85,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Bombana',
        'postal_code': 93771
    },
    {
        'id': 86,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Bondowoso',
        'postal_code': 68219
    },
    {
        'id': 87,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Bone',
        'postal_code': 92713
    },
    {
        'id': 88,
        'province': {
            'id': 7,
            'name': 'Gorontalo'
        },
        'type': 'Kabupaten',
        'name': 'Bone Bolango',
        'postal_code': 96511
    },
    {
        'id': 89,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kota',
        'name': 'Bontang',
        'postal_code': 75313
    },
    {
        'id': 90,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Boven Digoel',
        'postal_code': 99662
    },
    {
        'id': 91,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Boyolali',
        'postal_code': 57312
    },
    {
        'id': 92,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Brebes',
        'postal_code': 52212
    },
    {
        'id': 93,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Bukittinggi',
        'postal_code': 26115
    },
    {
        'id': 94,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Buleleng',
        'postal_code': 81111
    },
    {
        'id': 95,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Bulukumba',
        'postal_code': 92511
    },
    {
        'id': 96,
        'province': {
            'id': 16,
            'name': 'Kalimantan Utara'
        },
        'type': 'Kabupaten',
        'name': 'Bulungan (Bulongan)',
        'postal_code': 77211
    },
    {
        'id': 97,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Bungo',
        'postal_code': 37216
    },
    {
        'id': 98,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Buol',
        'postal_code': 94564
    },
    {
        'id': 99,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Buru',
        'postal_code': 97371
    },
    {
        'id': 100,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Buru Selatan',
        'postal_code': 97351
    },
    {
        'id': 101,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Buton',
        'postal_code': 93754
    },
    {
        'id': 102,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Buton Utara',
        'postal_code': 93745
    },
    {
        'id': 103,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Ciamis',
        'postal_code': 46211
    },
    {
        'id': 104,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Cianjur',
        'postal_code': 43217
    },
    {
        'id': 105,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Cilacap',
        'postal_code': 53211
    },
    {
        'id': 106,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kota',
        'name': 'Cilegon',
        'postal_code': 42417
    },
    {
        'id': 107,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Cimahi',
        'postal_code': 40512
    },
    {
        'id': 108,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Cirebon',
        'postal_code': 45611
    },
    {
        'id': 109,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Cirebon',
        'postal_code': 45116
    },
    {
        'id': 110,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Dairi',
        'postal_code': 22211
    },
    {
        'id': 111,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Deiyai (Deliyai)',
        'postal_code': 98784
    },
    {
        'id': 112,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Deli Serdang',
        'postal_code': 20511
    },
    {
        'id': 113,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Demak',
        'postal_code': 59519
    },
    {
        'id': 114,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kota',
        'name': 'Denpasar',
        'postal_code': 80227
    },
    {
        'id': 115,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Depok',
        'postal_code': 16416
    },
    {
        'id': 116,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Dharmasraya',
        'postal_code': 27612
    },
    {
        'id': 117,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Dogiyai',
        'postal_code': 98866
    },
    {
        'id': 118,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Dompu',
        'postal_code': 84217
    },
    {
        'id': 119,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Donggala',
        'postal_code': 94341
    },
    {
        'id': 120,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kota',
        'name': 'Dumai',
        'postal_code': 28811
    },
    {
        'id': 121,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Empat Lawang',
        'postal_code': 31811
    },
    {
        'id': 122,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Ende',
        'postal_code': 86351
    },
    {
        'id': 123,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Enrekang',
        'postal_code': 91719
    },
    {
        'id': 124,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Fakfak',
        'postal_code': 98651
    },
    {
        'id': 125,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Flores Timur',
        'postal_code': 86213
    },
    {
        'id': 126,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Garut',
        'postal_code': 44126
    },
    {
        'id': 127,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Gayo Lues',
        'postal_code': 24653
    },
    {
        'id': 128,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Gianyar',
        'postal_code': 80519
    },
    {
        'id': 129,
        'province': {
            'id': 7,
            'name': 'Gorontalo'
        },
        'type': 'Kabupaten',
        'name': 'Gorontalo',
        'postal_code': 96218
    },
    {
        'id': 130,
        'province': {
            'id': 7,
            'name': 'Gorontalo'
        },
        'type': 'Kota',
        'name': 'Gorontalo',
        'postal_code': 96115
    },
    {
        'id': 131,
        'province': {
            'id': 7,
            'name': 'Gorontalo'
        },
        'type': 'Kabupaten',
        'name': 'Gorontalo Utara',
        'postal_code': 96611
    },
    {
        'id': 132,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Gowa',
        'postal_code': 92111
    },
    {
        'id': 133,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Gresik',
        'postal_code': 61115
    },
    {
        'id': 134,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Grobogan',
        'postal_code': 58111
    },
    {
        'id': 135,
        'province': {
            'id': 5,
            'name': 'DI Yogyakarta'
        },
        'type': 'Kabupaten',
        'name': 'Gunung Kidul',
        'postal_code': 55812
    },
    {
        'id': 136,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Gunung Mas',
        'postal_code': 74511
    },
    {
        'id': 137,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Gunungsitoli',
        'postal_code': 22813
    },
    {
        'id': 138,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Halmahera Barat',
        'postal_code': 97757
    },
    {
        'id': 139,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Halmahera Selatan',
        'postal_code': 97911
    },
    {
        'id': 140,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Halmahera Tengah',
        'postal_code': 97853
    },
    {
        'id': 141,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Halmahera Timur',
        'postal_code': 97862
    },
    {
        'id': 142,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Halmahera Utara',
        'postal_code': 97762
    },
    {
        'id': 143,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Hulu Sungai Selatan',
        'postal_code': 71212
    },
    {
        'id': 144,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Hulu Sungai Tengah',
        'postal_code': 71313
    },
    {
        'id': 145,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Hulu Sungai Utara',
        'postal_code': 71419
    },
    {
        'id': 146,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Humbang Hasundutan',
        'postal_code': 22457
    },
    {
        'id': 147,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Indragiri Hilir',
        'postal_code': 29212
    },
    {
        'id': 148,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Indragiri Hulu',
        'postal_code': 29319
    },
    {
        'id': 149,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Indramayu',
        'postal_code': 45214
    },
    {
        'id': 150,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Intan Jaya',
        'postal_code': 98771
    },
    {
        'id': 151,
        'province': {
            'id': 6,
            'name': 'DKI Jakarta'
        },
        'type': 'Kota',
        'name': 'Jakarta Barat',
        'postal_code': 11220
    },
    {
        'id': 152,
        'province': {
            'id': 6,
            'name': 'DKI Jakarta'
        },
        'type': 'Kota',
        'name': 'Jakarta Pusat',
        'postal_code': 10540
    },
    {
        'id': 153,
        'province': {
            'id': 6,
            'name': 'DKI Jakarta'
        },
        'type': 'Kota',
        'name': 'Jakarta Selatan',
        'postal_code': 12230
    },
    {
        'id': 154,
        'province': {
            'id': 6,
            'name': 'DKI Jakarta'
        },
        'type': 'Kota',
        'name': 'Jakarta Timur',
        'postal_code': 13330
    },
    {
        'id': 155,
        'province': {
            'id': 6,
            'name': 'DKI Jakarta'
        },
        'type': 'Kota',
        'name': 'Jakarta Utara',
        'postal_code': 14140
    },
    {
        'id': 156,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kota',
        'name': 'Jambi',
        'postal_code': 36111
    },
    {
        'id': 157,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Jayapura',
        'postal_code': 99352
    },
    {
        'id': 158,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kota',
        'name': 'Jayapura',
        'postal_code': 99114
    },
    {
        'id': 159,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Jayawijaya',
        'postal_code': 99511
    },
    {
        'id': 160,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Jember',
        'postal_code': 68113
    },
    {
        'id': 161,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Jembrana',
        'postal_code': 82251
    },
    {
        'id': 162,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Jeneponto',
        'postal_code': 92319
    },
    {
        'id': 163,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Jepara',
        'postal_code': 59419
    },
    {
        'id': 164,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Jombang',
        'postal_code': 61415
    },
    {
        'id': 165,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Kaimana',
        'postal_code': 98671
    },
    {
        'id': 166,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Kampar',
        'postal_code': 28411
    },
    {
        'id': 167,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Kapuas',
        'postal_code': 73583
    },
    {
        'id': 168,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Kapuas Hulu',
        'postal_code': 78719
    },
    {
        'id': 169,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Karanganyar',
        'postal_code': 57718
    },
    {
        'id': 170,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Karangasem',
        'postal_code': 80819
    },
    {
        'id': 171,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Karawang',
        'postal_code': 41311
    },
    {
        'id': 172,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kabupaten',
        'name': 'Karimun',
        'postal_code': 29611
    },
    {
        'id': 173,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Karo',
        'postal_code': 22119
    },
    {
        'id': 174,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Katingan',
        'postal_code': 74411
    },
    {
        'id': 175,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Kaur',
        'postal_code': 38911
    },
    {
        'id': 176,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Kayong Utara',
        'postal_code': 78852
    },
    {
        'id': 177,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Kebumen',
        'postal_code': 54319
    },
    {
        'id': 178,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Kediri',
        'postal_code': 64184
    },
    {
        'id': 179,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Kediri',
        'postal_code': 64125
    },
    {
        'id': 180,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Keerom',
        'postal_code': 99461
    },
    {
        'id': 181,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Kendal',
        'postal_code': 51314
    },
    {
        'id': 182,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kota',
        'name': 'Kendari',
        'postal_code': 93126
    },
    {
        'id': 183,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Kepahiang',
        'postal_code': 39319
    },
    {
        'id': 184,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Anambas',
        'postal_code': 29991
    },
    {
        'id': 185,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Aru',
        'postal_code': 97681
    },
    {
        'id': 186,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Mentawai',
        'postal_code': 25771
    },
    {
        'id': 187,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Meranti',
        'postal_code': 28791
    },
    {
        'id': 188,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Sangihe',
        'postal_code': 95819
    },
    {
        'id': 189,
        'province': {
            'id': 6,
            'name': 'DKI Jakarta'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Seribu',
        'postal_code': 14550
    },
    {
        'id': 190,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Siau Tagulandang Biaro (Sitaro)',
        'postal_code': 95862
    },
    {
        'id': 191,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Sula',
        'postal_code': 97995
    },
    {
        'id': 192,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Talaud',
        'postal_code': 95885
    },
    {
        'id': 193,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Kepulauan Yapen (Yapen Waropen)',
        'postal_code': 98211
    },
    {
        'id': 194,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Kerinci',
        'postal_code': 37167
    },
    {
        'id': 195,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Ketapang',
        'postal_code': 78874
    },
    {
        'id': 196,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Klaten',
        'postal_code': 57411
    },
    {
        'id': 197,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Klungkung',
        'postal_code': 80719
    },
    {
        'id': 198,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Kolaka',
        'postal_code': 93511
    },
    {
        'id': 199,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Kolaka Utara',
        'postal_code': 93911
    },
    {
        'id': 200,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Konawe',
        'postal_code': 93411
    },
    {
        'id': 201,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Konawe Selatan',
        'postal_code': 93811
    },
    {
        'id': 202,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Konawe Utara',
        'postal_code': 93311
    },
    {
        'id': 203,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Kotabaru',
        'postal_code': 72119
    },
    {
        'id': 204,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kota',
        'name': 'Kotamobagu',
        'postal_code': 95711
    },
    {
        'id': 205,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Kotawaringin Barat',
        'postal_code': 74119
    },
    {
        'id': 206,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Kotawaringin Timur',
        'postal_code': 74364
    },
    {
        'id': 207,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Kuantan Singingi',
        'postal_code': 29519
    },
    {
        'id': 208,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Kubu Raya',
        'postal_code': 78311
    },
    {
        'id': 209,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Kudus',
        'postal_code': 59311
    },
    {
        'id': 210,
        'province': {
            'id': 5,
            'name': 'DI Yogyakarta'
        },
        'type': 'Kabupaten',
        'name': 'Kulon Progo',
        'postal_code': 55611
    },
    {
        'id': 211,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Kuningan',
        'postal_code': 45511
    },
    {
        'id': 212,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Kupang',
        'postal_code': 85362
    },
    {
        'id': 213,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kota',
        'name': 'Kupang',
        'postal_code': 85119
    },
    {
        'id': 214,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kabupaten',
        'name': 'Kutai Barat',
        'postal_code': 75711
    },
    {
        'id': 215,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kabupaten',
        'name': 'Kutai Kartanegara',
        'postal_code': 75511
    },
    {
        'id': 216,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kabupaten',
        'name': 'Kutai Timur',
        'postal_code': 75611
    },
    {
        'id': 217,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Labuhan Batu',
        'postal_code': 21412
    },
    {
        'id': 218,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Labuhan Batu Selatan',
        'postal_code': 21511
    },
    {
        'id': 219,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Labuhan Batu Utara',
        'postal_code': 21711
    },
    {
        'id': 220,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Lahat',
        'postal_code': 31419
    },
    {
        'id': 221,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Lamandau',
        'postal_code': 74611
    },
    {
        'id': 222,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Lamongan',
        'postal_code': 64125
    },
    {
        'id': 223,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Lampung Barat',
        'postal_code': 34814
    },
    {
        'id': 224,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Lampung Selatan',
        'postal_code': 35511
    },
    {
        'id': 225,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Lampung Tengah',
        'postal_code': 34212
    },
    {
        'id': 226,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Lampung Timur',
        'postal_code': 34319
    },
    {
        'id': 227,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Lampung Utara',
        'postal_code': 34516
    },
    {
        'id': 228,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Landak',
        'postal_code': 78319
    },
    {
        'id': 229,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Langkat',
        'postal_code': 20811
    },
    {
        'id': 230,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kota',
        'name': 'Langsa',
        'postal_code': 24412
    },
    {
        'id': 231,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Lanny Jaya',
        'postal_code': 99531
    },
    {
        'id': 232,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kabupaten',
        'name': 'Lebak',
        'postal_code': 42319
    },
    {
        'id': 233,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Lebong',
        'postal_code': 39264
    },
    {
        'id': 234,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Lembata',
        'postal_code': 86611
    },
    {
        'id': 235,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kota',
        'name': 'Lhokseumawe',
        'postal_code': 24352
    },
    {
        'id': 236,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Lima Puluh Koto/Kota',
        'postal_code': 26671
    },
    {
        'id': 237,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kabupaten',
        'name': 'Lingga',
        'postal_code': 29811
    },
    {
        'id': 238,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Lombok Barat',
        'postal_code': 83311
    },
    {
        'id': 239,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Lombok Tengah',
        'postal_code': 83511
    },
    {
        'id': 240,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Lombok Timur',
        'postal_code': 83612
    },
    {
        'id': 241,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Lombok Utara',
        'postal_code': 83711
    },
    {
        'id': 242,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kota',
        'name': 'Lubuk Linggau',
        'postal_code': 31614
    },
    {
        'id': 243,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Lumajang',
        'postal_code': 67319
    },
    {
        'id': 244,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Luwu',
        'postal_code': 91994
    },
    {
        'id': 245,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Luwu Timur',
        'postal_code': 92981
    },
    {
        'id': 246,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Luwu Utara',
        'postal_code': 92911
    },
    {
        'id': 247,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Madiun',
        'postal_code': 63153
    },
    {
        'id': 248,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Madiun',
        'postal_code': 63122
    },
    {
        'id': 249,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Magelang',
        'postal_code': 56519
    },
    {
        'id': 250,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kota',
        'name': 'Magelang',
        'postal_code': 56133
    },
    {
        'id': 251,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Magetan',
        'postal_code': 63314
    },
    {
        'id': 252,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Majalengka',
        'postal_code': 45412
    },
    {
        'id': 253,
        'province': {
            'id': 27,
            'name': 'Sulawesi Barat'
        },
        'type': 'Kabupaten',
        'name': 'Majene',
        'postal_code': 91411
    },
    {
        'id': 254,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kota',
        'name': 'Makassar',
        'postal_code': 90111
    },
    {
        'id': 255,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Malang',
        'postal_code': 65163
    },
    {
        'id': 256,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Malang',
        'postal_code': 65112
    },
    {
        'id': 257,
        'province': {
            'id': 16,
            'name': 'Kalimantan Utara'
        },
        'type': 'Kabupaten',
        'name': 'Malinau',
        'postal_code': 77511
    },
    {
        'id': 258,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Maluku Barat Daya',
        'postal_code': 97451
    },
    {
        'id': 259,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Maluku Tengah',
        'postal_code': 97513
    },
    {
        'id': 260,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Maluku Tenggara',
        'postal_code': 97651
    },
    {
        'id': 261,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Maluku Tenggara Barat',
        'postal_code': 97465
    },
    {
        'id': 262,
        'province': {
            'id': 27,
            'name': 'Sulawesi Barat'
        },
        'type': 'Kabupaten',
        'name': 'Mamasa',
        'postal_code': 91362
    },
    {
        'id': 263,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Mamberamo Raya',
        'postal_code': 99381
    },
    {
        'id': 264,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Mamberamo Tengah',
        'postal_code': 99553
    },
    {
        'id': 265,
        'province': {
            'id': 27,
            'name': 'Sulawesi Barat'
        },
        'type': 'Kabupaten',
        'name': 'Mamuju',
        'postal_code': 91519
    },
    {
        'id': 266,
        'province': {
            'id': 27,
            'name': 'Sulawesi Barat'
        },
        'type': 'Kabupaten',
        'name': 'Mamuju Utara',
        'postal_code': 91571
    },
    {
        'id': 267,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kota',
        'name': 'Manado',
        'postal_code': 95247
    },
    {
        'id': 268,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Mandailing Natal',
        'postal_code': 22916
    },
    {
        'id': 269,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Manggarai',
        'postal_code': 86551
    },
    {
        'id': 270,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Manggarai Barat',
        'postal_code': 86711
    },
    {
        'id': 271,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Manggarai Timur',
        'postal_code': 86811
    },
    {
        'id': 272,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Manokwari',
        'postal_code': 98311
    },
    {
        'id': 273,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Manokwari Selatan',
        'postal_code': 98355
    },
    {
        'id': 274,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Mappi',
        'postal_code': 99853
    },
    {
        'id': 275,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Maros',
        'postal_code': 90511
    },
    {
        'id': 276,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kota',
        'name': 'Mataram',
        'postal_code': 83131
    },
    {
        'id': 277,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Maybrat',
        'postal_code': 98051
    },
    {
        'id': 278,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Medan',
        'postal_code': 20228
    },
    {
        'id': 279,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Melawi',
        'postal_code': 78619
    },
    {
        'id': 280,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Merangin',
        'postal_code': 37319
    },
    {
        'id': 281,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Merauke',
        'postal_code': 99613
    },
    {
        'id': 282,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Mesuji',
        'postal_code': 34911
    },
    {
        'id': 283,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kota',
        'name': 'Metro',
        'postal_code': 34111
    },
    {
        'id': 284,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Mimika',
        'postal_code': 99962
    },
    {
        'id': 285,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Minahasa',
        'postal_code': 95614
    },
    {
        'id': 286,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Minahasa Selatan',
        'postal_code': 95914
    },
    {
        'id': 287,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Minahasa Tenggara',
        'postal_code': 95995
    },
    {
        'id': 288,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kabupaten',
        'name': 'Minahasa Utara',
        'postal_code': 95316
    },
    {
        'id': 289,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Mojokerto',
        'postal_code': 61382
    },
    {
        'id': 290,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Mojokerto',
        'postal_code': 61316
    },
    {
        'id': 291,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Morowali',
        'postal_code': 94911
    },
    {
        'id': 292,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Muara Enim',
        'postal_code': 31315
    },
    {
        'id': 293,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Muaro Jambi',
        'postal_code': 36311
    },
    {
        'id': 294,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Muko Muko',
        'postal_code': 38715
    },
    {
        'id': 295,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Muna',
        'postal_code': 93611
    },
    {
        'id': 296,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Murung Raya',
        'postal_code': 73911
    },
    {
        'id': 297,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Musi Banyuasin',
        'postal_code': 30719
    },
    {
        'id': 298,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Musi Rawas',
        'postal_code': 31661
    },
    {
        'id': 299,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Nabire',
        'postal_code': 98816
    },
    {
        'id': 300,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Nagan Raya',
        'postal_code': 23674
    },
    {
        'id': 301,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Nagekeo',
        'postal_code': 86911
    },
    {
        'id': 302,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kabupaten',
        'name': 'Natuna',
        'postal_code': 29711
    },
    {
        'id': 303,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Nduga',
        'postal_code': 99541
    },
    {
        'id': 304,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Ngada',
        'postal_code': 86413
    },
    {
        'id': 305,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Nganjuk',
        'postal_code': 64414
    },
    {
        'id': 306,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Ngawi',
        'postal_code': 63219
    },
    {
        'id': 307,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Nias',
        'postal_code': 22876
    },
    {
        'id': 308,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Nias Barat',
        'postal_code': 22895
    },
    {
        'id': 309,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Nias Selatan',
        'postal_code': 22865
    },
    {
        'id': 310,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Nias Utara',
        'postal_code': 22856
    },
    {
        'id': 311,
        'province': {
            'id': 16,
            'name': 'Kalimantan Utara'
        },
        'type': 'Kabupaten',
        'name': 'Nunukan',
        'postal_code': 77421
    },
    {
        'id': 312,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Ogan Ilir',
        'postal_code': 30811
    },
    {
        'id': 313,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Ogan Komering Ilir',
        'postal_code': 30618
    },
    {
        'id': 314,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Ogan Komering Ulu',
        'postal_code': 32112
    },
    {
        'id': 315,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Ogan Komering Ulu Selatan',
        'postal_code': 32211
    },
    {
        'id': 316,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Ogan Komering Ulu Timur',
        'postal_code': 32312
    },
    {
        'id': 317,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Pacitan',
        'postal_code': 63512
    },
    {
        'id': 318,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Padang',
        'postal_code': 25112
    },
    {
        'id': 319,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Padang Lawas',
        'postal_code': 22763
    },
    {
        'id': 320,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Padang Lawas Utara',
        'postal_code': 22753
    },
    {
        'id': 321,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Padang Panjang',
        'postal_code': 27122
    },
    {
        'id': 322,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Padang Pariaman',
        'postal_code': 25583
    },
    {
        'id': 323,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Padang Sidempuan',
        'postal_code': 22727
    },
    {
        'id': 324,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kota',
        'name': 'Pagar Alam',
        'postal_code': 31512
    },
    {
        'id': 325,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Pakpak Bharat',
        'postal_code': 22272
    },
    {
        'id': 326,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kota',
        'name': 'Palangka Raya',
        'postal_code': 73112
    },
    {
        'id': 327,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kota',
        'name': 'Palembang',
        'postal_code': 31512
    },
    {
        'id': 328,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kota',
        'name': 'Palopo',
        'postal_code': 91911
    },
    {
        'id': 329,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kota',
        'name': 'Palu',
        'postal_code': 94111
    },
    {
        'id': 330,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Pamekasan',
        'postal_code': 69319
    },
    {
        'id': 331,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kabupaten',
        'name': 'Pandeglang',
        'postal_code': 42212
    },
    {
        'id': 332,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Pangandaran',
        'postal_code': 46511
    },
    {
        'id': 333,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Pangkajene Kepulauan',
        'postal_code': 90611
    },
    {
        'id': 334,
        'province': {
            'id': 2,
            'name': 'Bangka Belitung'
        },
        'type': 'Kota',
        'name': 'Pangkal Pinang',
        'postal_code': 33115
    },
    {
        'id': 335,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Paniai',
        'postal_code': 98765
    },
    {
        'id': 336,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kota',
        'name': 'Parepare',
        'postal_code': 91123
    },
    {
        'id': 337,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Pariaman',
        'postal_code': 25511
    },
    {
        'id': 338,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Parigi Moutong',
        'postal_code': 94411
    },
    {
        'id': 339,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Pasaman',
        'postal_code': 26318
    },
    {
        'id': 340,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Pasaman Barat',
        'postal_code': 26511
    },
    {
        'id': 341,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kabupaten',
        'name': 'Paser',
        'postal_code': 76211
    },
    {
        'id': 342,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Pasuruan',
        'postal_code': 67153
    },
    {
        'id': 343,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Pasuruan',
        'postal_code': 67118
    },
    {
        'id': 344,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Pati',
        'postal_code': 59114
    },
    {
        'id': 345,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Payakumbuh',
        'postal_code': 26213
    },
    {
        'id': 346,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Pegunungan Arfak',
        'postal_code': 98354
    },
    {
        'id': 347,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Pegunungan Bintang',
        'postal_code': 99573
    },
    {
        'id': 348,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Pekalongan',
        'postal_code': 51161
    },
    {
        'id': 349,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kota',
        'name': 'Pekalongan',
        'postal_code': 51122
    },
    {
        'id': 350,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kota',
        'name': 'Pekanbaru',
        'postal_code': 28112
    },
    {
        'id': 351,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Pelalawan',
        'postal_code': 28311
    },
    {
        'id': 352,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Pemalang',
        'postal_code': 52319
    },
    {
        'id': 353,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Pematang Siantar',
        'postal_code': 21126
    },
    {
        'id': 354,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kabupaten',
        'name': 'Penajam Paser Utara',
        'postal_code': 76311
    },
    {
        'id': 355,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Pesawaran',
        'postal_code': 35312
    },
    {
        'id': 356,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Pesisir Barat',
        'postal_code': 35974
    },
    {
        'id': 357,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Pesisir Selatan',
        'postal_code': 25611
    },
    {
        'id': 358,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Pidie',
        'postal_code': 24116
    },
    {
        'id': 359,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Pidie Jaya',
        'postal_code': 24186
    },
    {
        'id': 360,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Pinrang',
        'postal_code': 91251
    },
    {
        'id': 361,
        'province': {
            'id': 7,
            'name': 'Gorontalo'
        },
        'type': 'Kabupaten',
        'name': 'Pohuwato',
        'postal_code': 96419
    },
    {
        'id': 362,
        'province': {
            'id': 27,
            'name': 'Sulawesi Barat'
        },
        'type': 'Kabupaten',
        'name': 'Polewali Mandar',
        'postal_code': 91311
    },
    {
        'id': 363,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Ponorogo',
        'postal_code': 63411
    },
    {
        'id': 364,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Pontianak',
        'postal_code': 78971
    },
    {
        'id': 365,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kota',
        'name': 'Pontianak',
        'postal_code': 78112
    },
    {
        'id': 366,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Poso',
        'postal_code': 94615
    },
    {
        'id': 367,
        'province': {
            'id': 33,
            'name': 'Sumatera Selatan'
        },
        'type': 'Kota',
        'name': 'Prabumulih',
        'postal_code': 31121
    },
    {
        'id': 368,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Pringsewu',
        'postal_code': 35719
    },
    {
        'id': 369,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Probolinggo',
        'postal_code': 67282
    },
    {
        'id': 370,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Probolinggo',
        'postal_code': 67215
    },
    {
        'id': 371,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Pulang Pisau',
        'postal_code': 74811
    },
    {
        'id': 372,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kabupaten',
        'name': 'Pulau Morotai',
        'postal_code': 97771
    },
    {
        'id': 373,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Puncak',
        'postal_code': 98981
    },
    {
        'id': 374,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Puncak Jaya',
        'postal_code': 98979
    },
    {
        'id': 375,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Purbalingga',
        'postal_code': 53312
    },
    {
        'id': 376,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Purwakarta',
        'postal_code': 41119
    },
    {
        'id': 377,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Purworejo',
        'postal_code': 54111
    },
    {
        'id': 378,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Raja Ampat',
        'postal_code': 98489
    },
    {
        'id': 379,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Rejang Lebong',
        'postal_code': 39112
    },
    {
        'id': 380,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Rembang',
        'postal_code': 59219
    },
    {
        'id': 381,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Rokan Hilir',
        'postal_code': 28992
    },
    {
        'id': 382,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Rokan Hulu',
        'postal_code': 28511
    },
    {
        'id': 383,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Rote Ndao',
        'postal_code': 85982
    },
    {
        'id': 384,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kota',
        'name': 'Sabang',
        'postal_code': 23512
    },
    {
        'id': 385,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Sabu Raijua',
        'postal_code': 85391
    },
    {
        'id': 386,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kota',
        'name': 'Salatiga',
        'postal_code': 50711
    },
    {
        'id': 387,
        'province': {
            'id': 15,
            'name': 'Kalimantan Timur'
        },
        'type': 'Kota',
        'name': 'Samarinda',
        'postal_code': 75133
    },
    {
        'id': 388,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sambas',
        'postal_code': 79453
    },
    {
        'id': 389,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Samosir',
        'postal_code': 22392
    },
    {
        'id': 390,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Sampang',
        'postal_code': 69219
    },
    {
        'id': 391,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sanggau',
        'postal_code': 78557
    },
    {
        'id': 392,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Sarmi',
        'postal_code': 99373
    },
    {
        'id': 393,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Sarolangun',
        'postal_code': 37419
    },
    {
        'id': 394,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Sawah Lunto',
        'postal_code': 27416
    },
    {
        'id': 395,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sekadau',
        'postal_code': 79583
    },
    {
        'id': 396,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Selayar (Kepulauan Selayar)',
        'postal_code': 92812
    },
    {
        'id': 397,
        'province': {
            'id': 4,
            'name': 'Bengkulu'
        },
        'type': 'Kabupaten',
        'name': 'Seluma',
        'postal_code': 38811
    },
    {
        'id': 398,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Semarang',
        'postal_code': 50511
    },
    {
        'id': 399,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kota',
        'name': 'Semarang',
        'postal_code': 50135
    },
    {
        'id': 400,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Seram Bagian Barat',
        'postal_code': 97561
    },
    {
        'id': 401,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kabupaten',
        'name': 'Seram Bagian Timur',
        'postal_code': 97581
    },
    {
        'id': 402,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kabupaten',
        'name': 'Serang',
        'postal_code': 42182
    },
    {
        'id': 403,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kota',
        'name': 'Serang',
        'postal_code': 42111
    },
    {
        'id': 404,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Serdang Bedagai',
        'postal_code': 20915
    },
    {
        'id': 405,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Seruyan',
        'postal_code': 74211
    },
    {
        'id': 406,
        'province': {
            'id': 26,
            'name': 'Riau'
        },
        'type': 'Kabupaten',
        'name': 'Siak',
        'postal_code': 28623
    },
    {
        'id': 407,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Sibolga',
        'postal_code': 22522
    },
    {
        'id': 408,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Sidenreng Rappang/Rapang',
        'postal_code': 91613
    },
    {
        'id': 409,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Sidoarjo',
        'postal_code': 61219
    },
    {
        'id': 410,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Sigi',
        'postal_code': 94364
    },
    {
        'id': 411,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sijunjung (Sawah Lunto Sijunjung)',
        'postal_code': 27511
    },
    {
        'id': 412,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Sikka',
        'postal_code': 86121
    },
    {
        'id': 413,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Simalungun',
        'postal_code': 21162
    },
    {
        'id': 414,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kabupaten',
        'name': 'Simeulue',
        'postal_code': 23891
    },
    {
        'id': 415,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kota',
        'name': 'Singkawang',
        'postal_code': 79117
    },
    {
        'id': 416,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Sinjai',
        'postal_code': 92615
    },
    {
        'id': 417,
        'province': {
            'id': 12,
            'name': 'Kalimantan Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sintang',
        'postal_code': 78619
    },
    {
        'id': 418,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Situbondo',
        'postal_code': 68316
    },
    {
        'id': 419,
        'province': {
            'id': 5,
            'name': 'DI Yogyakarta'
        },
        'type': 'Kabupaten',
        'name': 'Sleman',
        'postal_code': 55513
    },
    {
        'id': 420,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Solok',
        'postal_code': 27365
    },
    {
        'id': 421,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kota',
        'name': 'Solok',
        'postal_code': 27315
    },
    {
        'id': 422,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Solok Selatan',
        'postal_code': 27779
    },
    {
        'id': 423,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Soppeng',
        'postal_code': 90812
    },
    {
        'id': 424,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sorong',
        'postal_code': 98431
    },
    {
        'id': 425,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kota',
        'name': 'Sorong',
        'postal_code': 98411
    },
    {
        'id': 426,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sorong Selatan',
        'postal_code': 98454
    },
    {
        'id': 427,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Sragen',
        'postal_code': 57211
    },
    {
        'id': 428,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Subang',
        'postal_code': 41215
    },
    {
        'id': 429,
        'province': {
            'id': 21,
            'name': 'Nanggroe Aceh Darussalam (NAD)'
        },
        'type': 'Kota',
        'name': 'Subulussalam',
        'postal_code': 24882
    },
    {
        'id': 430,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sukabumi',
        'postal_code': 43311
    },
    {
        'id': 431,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Sukabumi',
        'postal_code': 43114
    },
    {
        'id': 432,
        'province': {
            'id': 14,
            'name': 'Kalimantan Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Sukamara',
        'postal_code': 74712
    },
    {
        'id': 433,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Sukoharjo',
        'postal_code': 57514
    },
    {
        'id': 434,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Sumba Barat',
        'postal_code': 87219
    },
    {
        'id': 435,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Sumba Barat Daya',
        'postal_code': 87453
    },
    {
        'id': 436,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Sumba Tengah',
        'postal_code': 87358
    },
    {
        'id': 437,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Sumba Timur',
        'postal_code': 87112
    },
    {
        'id': 438,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Sumbawa',
        'postal_code': 84315
    },
    {
        'id': 439,
        'province': {
            'id': 22,
            'name': 'Nusa Tenggara Barat (NTB)'
        },
        'type': 'Kabupaten',
        'name': 'Sumbawa Barat',
        'postal_code': 84419
    },
    {
        'id': 440,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Sumedang',
        'postal_code': 45326
    },
    {
        'id': 441,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Sumenep',
        'postal_code': 69413
    },
    {
        'id': 442,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kota',
        'name': 'Sungaipenuh',
        'postal_code': 37113
    },
    {
        'id': 443,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Supiori',
        'postal_code': 98164
    },
    {
        'id': 444,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kota',
        'name': 'Surabaya',
        'postal_code': 60119
    },
    {
        'id': 445,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kota',
        'name': 'Surakarta (Solo)',
        'postal_code': 57113
    },
    {
        'id': 446,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Tabalong',
        'postal_code': 71513
    },
    {
        'id': 447,
        'province': {
            'id': 1,
            'name': 'Bali'
        },
        'type': 'Kabupaten',
        'name': 'Tabanan',
        'postal_code': 82119
    },
    {
        'id': 448,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Takalar',
        'postal_code': 92212
    },
    {
        'id': 449,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Tambrauw',
        'postal_code': 98475
    },
    {
        'id': 450,
        'province': {
            'id': 16,
            'name': 'Kalimantan Utara'
        },
        'type': 'Kabupaten',
        'name': 'Tana Tidung',
        'postal_code': 77611
    },
    {
        'id': 451,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Tana Toraja',
        'postal_code': 91819
    },
    {
        'id': 452,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Tanah Bumbu',
        'postal_code': 72211
    },
    {
        'id': 453,
        'province': {
            'id': 32,
            'name': 'Sumatera Barat'
        },
        'type': 'Kabupaten',
        'name': 'Tanah Datar',
        'postal_code': 27211
    },
    {
        'id': 454,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Tanah Laut',
        'postal_code': 70811
    },
    {
        'id': 455,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kabupaten',
        'name': 'Tangerang',
        'postal_code': 15914
    },
    {
        'id': 456,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kota',
        'name': 'Tangerang',
        'postal_code': 15111
    },
    {
        'id': 457,
        'province': {
            'id': 3,
            'name': 'Banten'
        },
        'type': 'Kota',
        'name': 'Tangerang Selatan',
        'postal_code': 15332
    },
    {
        'id': 458,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Tanggamus',
        'postal_code': 35619
    },
    {
        'id': 459,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Tanjung Balai',
        'postal_code': 21321
    },
    {
        'id': 460,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Tanjung Jabung Barat',
        'postal_code': 36513
    },
    {
        'id': 461,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Tanjung Jabung Timur',
        'postal_code': 36719
    },
    {
        'id': 462,
        'province': {
            'id': 17,
            'name': 'Kepulauan Riau'
        },
        'type': 'Kota',
        'name': 'Tanjung Pinang',
        'postal_code': 29111
    },
    {
        'id': 463,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Tapanuli Selatan',
        'postal_code': 22742
    },
    {
        'id': 464,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Tapanuli Tengah',
        'postal_code': 22611
    },
    {
        'id': 465,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Tapanuli Utara',
        'postal_code': 22414
    },
    {
        'id': 466,
        'province': {
            'id': 13,
            'name': 'Kalimantan Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Tapin',
        'postal_code': 71119
    },
    {
        'id': 467,
        'province': {
            'id': 16,
            'name': 'Kalimantan Utara'
        },
        'type': 'Kota',
        'name': 'Tarakan',
        'postal_code': 77114
    },
    {
        'id': 468,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kabupaten',
        'name': 'Tasikmalaya',
        'postal_code': 46411
    },
    {
        'id': 469,
        'province': {
            'id': 9,
            'name': 'Jawa Barat'
        },
        'type': 'Kota',
        'name': 'Tasikmalaya',
        'postal_code': 46116
    },
    {
        'id': 470,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kota',
        'name': 'Tebing Tinggi',
        'postal_code': 20632
    },
    {
        'id': 471,
        'province': {
            'id': 8,
            'name': 'Jambi'
        },
        'type': 'Kabupaten',
        'name': 'Tebo',
        'postal_code': 37519
    },
    {
        'id': 472,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Tegal',
        'postal_code': 52419
    },
    {
        'id': 473,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kota',
        'name': 'Tegal',
        'postal_code': 52114
    },
    {
        'id': 474,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Teluk Bintuni',
        'postal_code': 98551
    },
    {
        'id': 475,
        'province': {
            'id': 25,
            'name': 'Papua Barat'
        },
        'type': 'Kabupaten',
        'name': 'Teluk Wondama',
        'postal_code': 98591
    },
    {
        'id': 476,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Temanggung',
        'postal_code': 56212
    },
    {
        'id': 477,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kota',
        'name': 'Ternate',
        'postal_code': 97714
    },
    {
        'id': 478,
        'province': {
            'id': 20,
            'name': 'Maluku Utara'
        },
        'type': 'Kota',
        'name': 'Tidore Kepulauan',
        'postal_code': 97815
    },
    {
        'id': 479,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Timor Tengah Selatan',
        'postal_code': 85562
    },
    {
        'id': 480,
        'province': {
            'id': 23,
            'name': 'Nusa Tenggara Timur (NTT)'
        },
        'type': 'Kabupaten',
        'name': 'Timor Tengah Utara',
        'postal_code': 85612
    },
    {
        'id': 481,
        'province': {
            'id': 34,
            'name': 'Sumatera Utara'
        },
        'type': 'Kabupaten',
        'name': 'Toba Samosir',
        'postal_code': 22316
    },
    {
        'id': 482,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Tojo Una-Una',
        'postal_code': 94683
    },
    {
        'id': 483,
        'province': {
            'id': 29,
            'name': 'Sulawesi Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Toli-Toli',
        'postal_code': 94542
    },
    {
        'id': 484,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Tolikara',
        'postal_code': 99411
    },
    {
        'id': 485,
        'province': {
            'id': 31,
            'name': 'Sulawesi Utara'
        },
        'type': 'Kota',
        'name': 'Tomohon',
        'postal_code': 95416
    },
    {
        'id': 486,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Toraja Utara',
        'postal_code': 91831
    },
    {
        'id': 487,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Trenggalek',
        'postal_code': 66312
    },
    {
        'id': 488,
        'province': {
            'id': 19,
            'name': 'Maluku'
        },
        'type': 'Kota',
        'name': 'Tual',
        'postal_code': 97612
    },
    {
        'id': 489,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Tuban',
        'postal_code': 62319
    },
    {
        'id': 490,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Tulang Bawang',
        'postal_code': 34613
    },
    {
        'id': 491,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Tulang Bawang Barat',
        'postal_code': 34419
    },
    {
        'id': 492,
        'province': {
            'id': 11,
            'name': 'Jawa Timur'
        },
        'type': 'Kabupaten',
        'name': 'Tulungagung',
        'postal_code': 66212
    },
    {
        'id': 493,
        'province': {
            'id': 28,
            'name': 'Sulawesi Selatan'
        },
        'type': 'Kabupaten',
        'name': 'Wajo',
        'postal_code': 90911
    },
    {
        'id': 494,
        'province': {
            'id': 30,
            'name': 'Sulawesi Tenggara'
        },
        'type': 'Kabupaten',
        'name': 'Wakatobi',
        'postal_code': 93791
    },
    {
        'id': 495,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Waropen',
        'postal_code': 98269
    },
    {
        'id': 496,
        'province': {
            'id': 18,
            'name': 'Lampung'
        },
        'type': 'Kabupaten',
        'name': 'Way Kanan',
        'postal_code': 34711
    },
    {
        'id': 497,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Wonogiri',
        'postal_code': 57619
    },
    {
        'id': 498,
        'province': {
            'id': 10,
            'name': 'Jawa Tengah'
        },
        'type': 'Kabupaten',
        'name': 'Wonosobo',
        'postal_code': 56311
    },
    {
        'id': 499,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Yahukimo',
        'postal_code': 99041
    },
    {
        'id': 500,
        'province': {
            'id': 24,
            'name': 'Papua'
        },
        'type': 'Kabupaten',
        'name': 'Yalimo',
        'postal_code': 99481
    },
    {
        'id': 501,
        'province': {
            'id': 5,
            'name': 'DI Yogyakarta'
        },
        'type': 'Kota',
        'name': 'Yogyakarta',
        'postal_code': 55222
    }
]

const Models = use('Models')
const City = new Models().model('Cities.Model')
const utils = use('Utils.Helper')

class Cities {
    async handle (args = {}) {
        const type = args.type || null
        if (type === 'export') await this.export()
        else console.log('ex: node service.js cities --type export')
    }

    async export () {
        await this.upsertMany(cities, City)
    }
    async upsertMany (data = [], M) {
        utils.debugme('updating data to raw collection')
        if (data.length === 0) return null
        for (const x of data) {
            utils.debugme(`upserting data ${x.name}`)
            x['status'] = {
                'available': true,
                'banned': false
            }
            await M.updateOne({id: x.id}, x, {upsert: true})
        }
    }
}

module.exports = Cities
