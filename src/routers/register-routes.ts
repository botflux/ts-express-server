import {Application} from 'express'
import createPostRouter from './post-router'
import createUserRouter from './user-router'
import ServiceContainer from '../services/service-core/service-container'

export const registerRoutes = (app: Application, serviceContainer: ServiceContainer) => app
    .use('/posts', createPostRouter(serviceContainer))
    .use('/users', createUserRouter(serviceContainer))
