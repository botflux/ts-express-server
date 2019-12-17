import {MiddlewareFactoryInterface} from '../core/middlewares/interfaces/middlewares-interfaces'
import {ServiceContainer} from '../core/services/service-container'
import {NextFunction, Request, Response} from 'express'
import {LoggerInterface} from '../services/interfaces/logger-interface'
import {ServiceTypes} from '../core/services/service-types'

export const logRequestMiddleware: MiddlewareFactoryInterface = (serviceContainer: ServiceContainer) => {
    const logger: LoggerInterface = serviceContainer.getService(ServiceTypes.Logger)

    return (req: Request, res: Response, next: NextFunction) => {
        logger.log('Request', req.url)
        next()
    }
}
