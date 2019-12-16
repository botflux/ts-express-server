import 'reflect-metadata'
import {Application} from 'express'

import { registerServices } from './register-services'
import { ServiceContainer } from './services/core/service-container'
import {BaseController} from './controllers/base-controller'

export const setupApp = (app: Application) => {
    /* Services declaration */
    const serviceContainer: ServiceContainer = registerServices(new ServiceContainer())
    /* Register service container */
    BaseController.setContainer(serviceContainer)
}
