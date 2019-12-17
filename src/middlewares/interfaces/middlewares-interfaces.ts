import {ServiceContainer} from '../../services/core/service-container'
import {Handler} from 'express'

export interface MiddlewareFactoryInterface {
    (serviceContainer: ServiceContainer): Handler
}
