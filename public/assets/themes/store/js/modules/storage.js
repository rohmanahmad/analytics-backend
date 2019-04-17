'use strict'

class Storage {
    constructor () {
        this.indexedDB = null;
        this.db = null;
        this.transaction = null;
        this.keyrange = null;
        this.dbConnection = null;
        this.dbname = 'siomay';
        this.collection = {};
        // this.checkCompatibility();
    }
    collectionModels () {
        return [
            {
                name: 'my_profile',
                path: 'profile_id',
                index: [
                    {
                        key: 'profile_id',
                        name: 'profile_id',
                        settings: {
                            unique: true
                        }
                    }
                ]
            },
            {
                name: 'my_favorites',
                path: 'favorite_id',
                index: [
                    {
                        key: 'id',
                        name: 'id',
                        settings: {
                            unique: true
                        }
                    }
                ]
            },
            {
                name: 'my_carts',
                path: 'cart_id',
                index: [
                    {
                        key: 'product_id',
                        name: 'product_id',
                        settings: {
                            unique: true
                        }
                    },
                    {
                        key: 'cart_id',
                        name: 'cart_id',
                        settings: {
                            unique: true
                        }
                    }
                ]
            },
            {
                name: 'products',
                path: 'prd_id',
                index: [
                    {
                        key: 'id',
                        name: 'id',
                        settings: {
                            unique: true
                        }
                    },
                    {
                        key: 'name',
                        name: 'name',
                        settings: {
                            unique: true
                        }
                    }
                ]
            },
            {
                name: 'brands',
                path: 'brand_id',
                index: [
                    {
                        key: 'id',
                        name: 'id',
                        settings: {
                            unique: true
                        }
                    },
                    {
                        key: 'name',
                        name: 'name',
                        settings: {
                            unique: true
                        }
                    }
                ]
            }
        ]
    }
    checkCompatibility () {
        this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        
        this.transaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        this.keyrange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
        
        if (!window.indexedDB) {
            window.alert('Your browser doesn\'t support a stable version of IndexedDB.');
        } else {
            console.log('Your browser fully DB support');
        }
        if (!this.dbConnection) {
            const self = this;
            const request = this.indexedDB.open(this.dbname);
            request.onsuccess = function(event) {
                console.info('db connection success');
                self.dbConnection = event.target.result;
            };
            request.onerror = function(event) {
                console.error("Database error: " + event.target.errorCode);
            };
            request.onupgradeneeded = function(event) {
                console.log('db on upgraded');
                var db = event.target.result;
                for (const x of self.collectionModels()) {
                    var objectStore = db.createObjectStore(x.name, { keyPath: x.path });
                    for (const o of x.index) {
                        objectStore.createIndex(o.key, o.name, o.settings);
                    }
                }
              
            };
        }
    }
    storage (type = 'DB') {
        if (type === 'localStorage') {
            return this.localStorage();
        } else {
            return this.DB();
        }
    }
    localStorage () {
        return {
            setNotJson: function () {
                this.noJSON = true;
                return this;
            },
            collection: function (colname) {
                if (!colname) {
                    console.error('no collection selected');
                    return null;
                }
                this.currentKey = colname;
                return this;
            },
            upsert: function (data = {}) {
                console.log('(LS) upserting');
                return new Promise((resolve, reject) => {
                    if (typeof data === 'object') {
                        data = JSON.stringify(data);
                    }
                    localStorage.setItem(this.currentKey, data);
                    resolve(true);
                });
            },
            replace: function (data = {}) {
                console.log('(LS) replace');
                return new Promise((resolve, reject) => {
                    if (typeof data === 'object') {
                        data = JSON.stringify(data);
                    }
                    console.log(typeof data, data);
                    localStorage.setItem(this.currentKey, data);
                    resolve(true);
                });
            },
            add: function (data = {}) {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            },
            update: function (id, data = {}) {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            },
            read: function (id, isJSON = true) {
                return new Promise((resolve, reject) => {
                    try {
                        let L = localStorage.getItem(this.currentKey);
                        if (L && L.length > 0 && isJSON) {
                            L = JSON.parse(L);
                        }
                        resolve(L);
                    } catch (e) {
                        reject(e.message);
                    }
                })
            },
            remove: function (id = '') {
                localStorage.setItem(this.currentKey, '');
            }
        }
    }
    DB () {
        const self = this;
        return {
            collection: function (colname) {
                console.log(colname, 'set collection');
                if (!colname) {
                    console.error('no collection selected');
                    return null;
                }
                this.colname = colname;
                return this;
            },
            upsert: function (data = {}) {
                console.log('(DB) upserting');
                return new Promise((resolve, reject) => {
                    let ids = [];
                    if (typeof data === 'object' && data[0]) {
                        ids = data.map(x => x.id);
                    } else {
                        ids = Array(data.id);
                    }
                    this
                        .read(ids)
                        .then(function (res) {
                            console.log({res})
                    });
                    resolve();
                })
            },
            add: function (data) {
                console.log('adding data');
                return new Promise((resolve, reject) => {
                    if (!this.colname) {
                        return reject(new Error('no collection selected!'));
                    }
                    const col = self.dbConnection
                        .transaction(this.colname)
                        .objectStore(this.colname);
                    resolve();
                });
            },
            update: function (id, data = {}) {
                console.log('updating data');
                return new Promise((resolve, reject) => {
                    resolve();
                });
            },
            read: function (ids = []) {
                console.log('reading database');
                return new Promise((resolve, reject) => {
                    if (!this.colname) {
                        return reject(new Error('no collection selected!'));
                    }
                    const col = self.dbConnection
                        .transaction(this.colname)
                        .objectStore(this.colname);
                    const q = col.getAll();
                    q.onsuccess = (ev) => {
                        const currentData = ev.target.result;
                        resolve(currentData);
                    }
                    q.onerror = (err) => {
                        reject(err);
                    }
                })
                
            },
            remove: function (id = '') {
                console.log('removing data');
                return new Promise((resolve, reject) => {
                    resolve();
                });
            }
        };
    }
}