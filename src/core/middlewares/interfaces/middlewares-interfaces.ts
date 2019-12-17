import {ServiceContainer} from '../../services/service-container'
import {Handler} from 'express'

export interface MiddlewareFactoryInterface {
    (serviceContainer: ServiceContainer): Handler
}

export interface MiddlewareInterface {
    invoke: Handler
}
