import 'reflect-metadata'
import {Application, Router} from 'express'

import { registerServices } from './register-services'
import { ServiceContainer } from './services/core/service-container'
import {BaseController} from './controllers/base-controller'
import {controllers, registerControllers} from './register-controllers'
import {ControllerFactoryFunction, ControllerInterface} from './controllers/interfaces/controller-interfaces'
import {afterAll, beforeAll} from './register-middlewares'

export const setupApp = (app: Application) => {
    /* Services declaration */
    const serviceContainer: ServiceContainer = registerServices(new ServiceContainer())
    /* Register service container */
    BaseController.setContainer(serviceContainer)

    app.disable('x-powered-by')

    const appRouter = controllers.reduce((router: Router, factory: ControllerFactoryFunction) => {
        const c: ControllerInterface = factory()
        return router.use(c.getBasUrl(), c.getRouter())
    }, Router())

    const beforeAllMiddlewares = beforeAll.map(middlewareFactory => middlewareFactory(serviceContainer))
    const afterAllMiddlewares = afterAll.map(middlewareFactory => middlewareFactory(serviceContainer))

    app.use([
        ...beforeAllMiddlewares,
        appRouter,
        ...afterAllMiddlewares
    ])
}
