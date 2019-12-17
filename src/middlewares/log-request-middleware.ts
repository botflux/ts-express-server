// import {MiddlewareFactoryInterface, MiddlewareInterface} from '../core/middlewares/interfaces/middlewares-interfaces'
// import {ServiceContainer} from '../core/services/service-container'
import {NextFunction, Request, Response} from 'express'
import {LoggerInterface} from '../services/interfaces/logger-interface'
import {ServiceTypes} from '../core/services/service-types'
import {BaseMiddleware} from '../core/middlewares/base-middleware'
import {MiddlewareInterface} from '../core/middlewares/interfaces/middlewares-interfaces'
//
// export const logRequestMiddleware: MiddlewareFactoryInterface = (serviceContainer: ServiceContainer) => {
//     const logger: LoggerInterface = serviceContainer.getService(ServiceTypes.Logger)
//
//     return (req: Request, res: Response, next: NextFunction) => {
//         logger.log('Request', req.url)
//         next()
//     }
// }

export class LoggerMiddleware extends BaseMiddleware implements MiddlewareInterface {

    private readonly _logger: LoggerInterface

    constructor() {
        super()
        this._logger = this.container.getService(ServiceTypes.Logger)
    }

    invoke (req: Request, res: Response, next: NextFunction) {
        this._logger.log('Request', req.url)
        next()
    }
}
