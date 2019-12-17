import {MiddlewareFactoryInterface} from './middlewares/interfaces/middlewares-interfaces'
import {logRequestMiddleware} from './middlewares'

export const beforeAll: MiddlewareFactoryInterface[] = [
    logRequestMiddleware
]

export const afterAll: MiddlewareFactoryInterface[] = []
