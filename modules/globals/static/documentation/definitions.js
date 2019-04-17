'use strict'

const _ = use('_')

const schemas = {
    "deleted_response": {
        "properties": {
            "status": {"default": 200},
            "message": {"default": "deleted"},
            "data": {
                "type": "object",
                "properties": {
                    "_id": {"default": "OBjectID"}
                }
            }
        }
    },
    "ai_voc_schema": {
        "properties": {
            "type": {
                "type": "string",
                "default": "V|N|ADJ|C|PN|"
            },
            "id_keyword": {
                "type": "string",
                "default": "test"
            },
            "en_keyword": {
                "type": "string"
            },
            "description": {
                "type": "string",
                "default": "description"
            }
        }
    },
    "updated_response": {
        "properties": {
            "status": {"default": 200},
            "message": {"default": "updated"},
            "data": {
                "type": "object",
                "properties": {
                    "_id": {"default": "ObjectID"}
                }
            }
        }
    },
    "login_response": {
        "properties": {
            "status": {"default": 200},
            "message": {"default": "login success"},
            "data": {
                "type": "object",
                "properties": {
                    "user_email": {"default": "jhon@example.com"},
                    "token": {"default": "124ND0MH4$H"}
                }
            }
        }
    },
    "sentiments_list_response": {
        "properties": {
            "status": {"default": 200},
            "message": {"default": "success"},
            "data": {
                "type": "object",
                "properties": {
                    "total": {"default": 100},
                    "current": {"default": 10},
                    "page": {"default": 1},
                    "items": {
                        "type": "array",
                        "items": [
                            {
                                "properties": {
                                    "_id": {"default": "ObjectID"},
                                    "id_keyword": {"default": "contoh"},
                                    "en_keyword": {"default": "example"},
                                    "type": {"default": "V|N|ADJ|C|PN"},
                                    "desctription": {"default": "description of keyword"}
                                }
                            }
                        ]
                    }
                }
            }
        }
    },
    "sentiments_find_one_response": {
        "properties": {
            "status": {"default": 200},
            "message": {"default": "success"},
            "data": {
                "type": "object",
                "properties": {
                    "_id": {"default": "ObjectID"},
                    "id_keyword": {"default": "contoh"},
                    "en_keyword": {"default": "example"},
                    "type": {"default": "V|N|ADJ|C|PN"},
                    "desctription": {"default": "description of keyword"}
                }
            }
        }
    }
}
const definitions = {
    // C
    "categories_query": {
        "in": "query",
        "name": "categories",
        "type": "query (string)",
        "description": "category ids (separated by comma)"
    },
    // D
    "description_form": {
        "in": "formData",
        "name": "description",
        "type": "form (string)",
        "description": ""
    },
    // E
    "en_key_form": {
        "in": "formData",
        "name": "en_key",
        "type": "form (string)",
        "description": ""
    },
    // I
    "id_query": {
        "in": "query",
        "name": "id",
        "type": "query (string)",
        "description": "ObjectID"
    },
    "ids_query": {
        "in": "query",
        "name": "ids",
        "type": "query (string)",
        "description": "Id not ObjectId"
    },
    "id_path": {
        "in": "path",
        "name": "id",
        "type": "path (string)",
        "description": "ObjectID"
    },
    "id_key_form": {
        "in": "formData",
        "name": "id_key",
        "type": "form (string)",
        "description": ""
    },
    // L
    "limit_query": {
        "in": "query",
        "name": "limit",
        "type": "query (numeral)",
        "description": "limit"
    },
    // P
    "parent_query": {
        "in": "query",
        "name": "parent",
        "type": "query (numeral)",
        "description": "parent"
    },
    "page_query": {
        "in": "query",
        "name": "page",
        "type": "query (numeral)",
        "description": "page"
    },
    // S
    "sort_query": {
        "in": "query",
        "name": "sort",
        "type": "query (string)",
        "enum": ["asc", "desc"],
        "description": "asc | desc",
        "default": "asc"
    },
    "settings_query": {
        "in": "query",
        "name": "settings",
        "type": "query (string)",
        "description": "adjust for page settings (separated by comma)",
        "default": 0
    },
    "sentiment_form": {
        "in": "formData",
        "name": "sentiment",
        "type": "form (numeral)",
        "description": "1 | 0 | -1",
        "default": 0
    },
    "sentence_form": {
        "in": "formData",
        "name": "sentence",
        "type": "form (string)",
        "description": ""
    },
    "slug_query": {
        "in": "query",
        "name": "slug",
        "type": "form (string)",
        "description": ""
    },
    // T
    "type_form": {
        "in": "formData",
        "name": "type",
        "type": "form (string)",
        "description": "V|N|ADJ|C|PN"
    },
    // U
    "user_email_form": {
        "in": "formData",
        "name": "user_email",
        "type": "form (string)",
        "description": "user email"
    },
    "url_form": {
        "in": "formData",
        "name": "url",
        "type": "form (string)",
        "description": "url include http / https"
    },
    "user_password_form": {
        "in": "formData",
        "name": "user_password",
        "type": "form (string)",
        "description": "user password"
    },
    "uniq_code_path": {
        "in": "path",
        "name": "uniq_code",
        "type": "path (string)",
        "description": "Unique Code Url"
    }
}
module.exports = {
    schemas,
    getSchema: function (key) {
        return schemas[key]
    },
    getData: function (key, defaultVal = null, customDescription = null) {
        let definition = _.cloneDeep(definitions[key])
        if (defaultVal) definition['default'] = defaultVal
        if (customDescription) definition['description'] = customDescription
        return definition
    }
}
