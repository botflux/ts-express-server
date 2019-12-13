import 'reflect-metadata'
import express, {Application} from 'express'

import { registerServices } from './services/register-services'
import { registerRoutes } from './routers/register-routes'
import ServiceContainer from './services/service-core/service-container'

const app: Application = express()

/* Services declaration */
const serviceContainer: ServiceContainer = registerServices(new ServiceContainer())

/* Routers declaration */
registerRoutes(app, serviceContainer)

export default app
