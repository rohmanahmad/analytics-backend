import { Injectable } from '@nestjs/common';

// example : https://petstore.swagger.io/v2/swagger.json

@Injectable()
export class DocumentaionService {
    getJsonFormat () : object {
        return {
            swagger: '2.0',
            info: {
                version: '1.0.0',
                title: 'Docs For Analytics',
                description: 'Only For Analytics Backend API',
                contact: {
                    email: 'rohmanmail@gmail.com',
                    phone: '+62 8233 2303 931'
                }
            },
            host: 'localhost:3000',
            basePath: '/api/v1',
            schemes: [
                'http',
                'https'
            ],
            tags: this.tags,
            securityDefinitions: this.securityDefinition,
            definitions: this.definitions,
            paths: {
                ...this.accountPath
            }
        }
    }

    responseTypes (custom? : object) : object {
        const res = {
            '200': {
                description: 'Ok'
            },
            '400': {
                description: 'Bad Request',
                schema: {
                    $ref: '#/definitions/BadRequestResponse'
                }
            },
            '402': {
                description: 'Bad Request',
                schema: {
                    $ref: '#/definitions/BadRequestResponse'
                }
            },
            '500': {
                description: 'Error',
                schema: {
                    $ref: '#/definitions/ErrorResponse'
                }
            }
        }
        if (custom) {
            for(let x in custom) {
                if (!res[x]) res[x] = {}
                res[x]['schema'] = {
                    $ref: custom[x]
                }
            }
        }
        return res
    }

    get tags () {
        return [
            {
                name: 'Authentication',
                description: 'Used For Auth'
            },
            {
                name: 'Accounts',
                description: 'All About Accounts API'
            }
        ]
    }

    get securityDefinition () : object {
        return {
            bearer_token: {
                type: 'apiKey',
                name: 'bearer_token',
                in: 'header'
            }
        }
    }

    get definitions () : object {
        return {
            ...this.formData,
            ...this.queryData,
            ...this.responses
        }
    }

    get responses () : object {
        const defaultResponse = (statusCode = 200) => {
            return {
                statusCode: {
                    type: 'integer',
                    example: statusCode
                },
                message: {
                    type: 'string'
                }
            }
        }
        return {
            BadRequestResponse: {
                type: 'object',
                properties: {
                    ...defaultResponse(400),
                    error: {
                        type: 'string'
                    }
                }
            },
            InvalidLoginResponse: {
                type: 'object',
                properties: {
                    ...defaultResponse(402),
                    error: {
                        type: 'string'
                    }
                }
            },
            ErrorResponse: {
                type: 'object',
                properties: {
                    ...defaultResponse(500),
                    error: {
                        type: 'string'
                    }
                }
            },
            SuccessLoginResponse: {
                type: 'object',
                properties: {
                    ...defaultResponse(200),
                    token: {
                        type: 'string'
                    }
                }
            }
        }
    }

    get queryData () : object {
        return {

        }
    }

    get formData () : object {
        return {
            LoginBody: {
                type: 'object',
                required: [
                    'username',
                    'password'
                ],
                properties: {
                    username: {
                        type: 'string',
                        example: 'rohman_test or rohman@test.com'
                    },
                    password: {
                        type: 'string',
                        example: '****'
                    }
                }
            }
        }
    }

    get accountPath () : object {
        return {
            '/auth/login': {
                post: {
                    tags: ['Authentication'],
                    summary: 'Login',
                    operationId: 'api.v1.auth.login',
                    consumes: ['application/json'],
                    produces: ['application/json', 'application/xml'],
                    parameters: [
                        {
                            in: 'body',
                            name: 'body',
                            description: 'username/email and password is required',
                            required: true,
                            schema: {
                                $ref: '#/definitions/LoginBody'
                            }
                        }
                    ],
                    security: [
                        {
                            token: []
                        }
                    ],
                    responses: this.responseTypes({
                        200: '#/definitions/SuccessLoginResponse',
                        402: '#/definitions/InvalidLoginResponse'
                    })
                }
            }
        }
    }
}