import 'reflect-metadata'
import {Application} from 'express'

import { registerServices } from './services/register-services'
import { ServiceContainer } from './services/core/service-container'

export const setupApp = (app: Application) => {
    /* Services declaration */
    const serviceContainer: ServiceContainer = registerServices(new ServiceContainer())
}
