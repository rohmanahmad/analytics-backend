'use strict'

const Env = process.env
const DomainRef = Env.DOMAIN_REF || ''
let parameters = use('SwaggerUIParameters.Lib')

module.exports = {
    '/account/auth/login': {
        'post': {
            'tags': ['User Account API'],
            'summary': 'Login User',
            'description': 'Login for user with username & password\n',
            'operationId': 'accountLogin',
            'requestBody': {
                '$ref': `${DomainRef}/open-api/references?ref=Body.AccountLogin`
            },
            'responses': {
                '200': {
                    'description': 'success if username and password is match',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array',
                                'items': {
                                    '$ref': `${DomainRef}/open-api/references?ref=Schemas.LoginSuccess`
                                }
                            }
                        }
                    }
                },
                '400': {
                    'description': 'bad input parameter'
                }
            }
        }
    },
    '/account/auth/register': {
        'post': {
            'tags': ['User Account API'],
            'summary': 'Register User',
            'description': 'Register for user with all information\n',
            'operationId': 'accountRegister',
            'requestBody': {
                '$ref': `${DomainRef}/open-api/references?ref=Body.AccountRegister`
            },
            'responses': {
                '200': {
                    'description': 'Success if user input all required fields',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array',
                                'items': {
                                    '$ref': `${DomainRef}/open-api/references?ref=Schemas.RegisterSuccess`
                                }
                            }
                        }
                    }
                },
                '400': {
                    'description': 'bad input parameter'
                }
            }
        }
    },
    '/account/auth/forgot': {
        'post': {
            'tags': ['User Account API'],
            'summary': 'Forgot User Password',
            'description': 'Forgot Password for registered user\n',
            'operationId': 'accountForgot',
            'requestBody': {
                '$ref': `${DomainRef}/open-api/references?ref=Body.AccountForgot`
            },
            'responses': {
                '200': {
                    'description': 'Success if user has email',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array',
                                'items': {
                                    '$ref': `${DomainRef}/open-api/references?ref=Schemas.ForgotPasswordSent`
                                }
                            }
                        }
                    }
                },
                '400': {
                    'description': 'bad input parameter'
                }
            }
        }
    },
    '/account/auth/forgot/validation': {
        'get': {
            'tags': ['User Account API'],
            'summary': 'Forgot Validation',
            'description': 'Link validation\n',
            'operationId': 'accountForgotValidation',
            'parameters': [
                parameters('Email', { 'name': 'email', 'in': 'query', 'required': false, 'style': 'form', 'schema': { 'type': 'string' } }),
                parameters('UUID', { 'name': 'forgot_id', 'in': 'query', 'required': false, 'style': 'form', 'schema': { 'type': 'string' } })
            ],
            'responses': {
                '200': {
                    'description': 'Should be valid link',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array',
                                'items': {
                                    '$ref': `${DomainRef}/open-api/references?ref=Schemas.ResetPasswordValid`
                                }
                            }
                        }
                    }
                },
                '400': {
                    'description': 'bad input parameter'
                }
            }
        }
    },
    '/account/auth/password/change': {
        'post': {
            'tags': ['User Account API'],
            'summary': 'Reset User Password',
            'description': 'Reset User Password\n',
            'operationId': 'accountResetPass',
            'requestBody': {
                '$ref': `${DomainRef}/open-api/references?ref=Body.AccountResetPassword`
            },
            'responses': {
                '200': {
                    'description': 'Success if user has email',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array',
                                'items': {
                                    '$ref': `${DomainRef}/open-api/references?ref=Schemas.ResetPasswordSuccess`
                                }
                            }
                        }
                    }
                },
                '400': {
                    'description': 'bad input parameter'
                }
            }
        }
    }
}
