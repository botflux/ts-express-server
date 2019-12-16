import 'reflect-metadata'
import {Application} from 'express'

import { registerServices } from './services/register-services'
import { registerControllers } from './controllers/core/register-controllers'
import { ServiceContainer } from './services/core/service-container'

export const setupApp = (app: Application) => {
    /* Services declaration */
    const serviceContainer: ServiceContainer = registerServices(new ServiceContainer())

    /* Routers declaration */
    registerControllers(app, serviceContainer)
}
