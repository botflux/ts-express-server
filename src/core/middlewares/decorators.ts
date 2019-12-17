import {ApplicationBootstrapper} from '../application/application-bootstrapper'
import {MiddlewareInterface} from './interfaces/middlewares-interfaces'

export const GlobalMiddleware = () =>
    <T extends{new(...args: any[]): MiddlewareInterface}>(constructor: T) => {
        const middlewareInstance: MiddlewareInterface = new constructor()
        ApplicationBootstrapper.globalMiddlewares.push(middlewareInstance)
    }
