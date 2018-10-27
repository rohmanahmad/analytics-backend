module.exports = {
    "ai_voc_body": {
        "in": "body",
        "name": "data",
        "description": "data [object]",
        "schema": {
            "$ref": "#/definitions/ai_voc_schema"
        }
    },
    "ai_voc_body_put": {
        "in": "body",
        "name": "data",
        "description": "data [object]",
        "schema": {
            "$ref": "#/definitions/ai_body"
        }
    },
    "id_path": {
        "in": "path",
        "name": "id",
        "type": "path",
        "description": "id [string]"
    },
    "id_query": {
        "in": "query",
        "name": "id",
        "type": "query",
        "description": "id (string)"
    },
    "ai_body": {
        "properties": {
            "action": {
                "type": "string",
                "default": "update|delete"
            },
            "items": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "default": "hash-id"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "type": {
                                    "type": "string",
                                    "default": "V|N|ADJ|C|PN|"
                                },
                                "indo_keyword": {
                                    "type": "string",
                                    "default": "update keyword"
                                },
                                "en_keyword": {
                                    "type": "string",
                                    "default": "update keyword"
                                },
                                "description": {
                                    "type": "string",
                                    "default": "update description"
                                }
                            }
                        }
                    }
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
            "indo_keyword": {
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
    "limit_query": {
        "in": "query",
        "name": "limit",
        "type": "query",
        "description": "limit (int)"
    },
    "page_query": {
        "in": "query",
        "name": "page",
        "type": "query",
        "description": "page (int)"
    },
    "user_email_form": {
        "in": "formData",
        "name": "user_email",
        "type": "formData",
        "description": "user_email (string)"
    },
    "user_password_form": {
        "in": "formData",
        "name": "user_password",
        "type": "formData",
        "description": "user_password (string)"
    },
    "sort_query": {
        "in": "query",
        "name": "sort",
        "type": "query",
        "description": "asc | desc (string)",
        "default": "asc"
    },
    "deleted_response": {
        "properties": {
            "status": {"default": 200},
            "message": {"default": "deleted"},
            "data": {
                "type": "object",
                "properties": {
                    "_id": {"default": "hash-id"}
                }
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
                    "_id": {"default": "hash-id"}
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
                                    "_id": {"default": "random-hash"},
                                    "indo_keyword": {"default": "contoh"},
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
                    "_id": {"default": "random-hash"},
                    "indo_keyword": {"default": "contoh"},
                    "en_keyword": {"default": "example"},
                    "type": {"default": "V|N|ADJ|C|PN"},
                    "desctription": {"default": "description of keyword"}
                }
            }
        }
    }
}
