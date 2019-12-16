import 'reflect-metadata'
import express, {Application} from 'express'

import { registerServices } from './services/register-services'
import { registerControllers } from './controllers/core/register-controllers'
import { ServiceContainer } from './services/core/service-container'

const app: Application = express()

/* Services declaration */
const serviceContainer: ServiceContainer = registerServices(new ServiceContainer())

/* Routers declaration */
registerControllers(app, serviceContainer)

export default app
