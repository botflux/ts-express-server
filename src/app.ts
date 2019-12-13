import express, {Application} from 'express'
import fetch from 'node-fetch'

import createPostRouter from './routers/post-router'
import createUserRouter from './routers/user-router'

import PostService from './services/post-service/post-service'
import ServiceContainer from './services/service-core/service-container'

import {ServiceTypes} from './services/service-core/service-types'
import {UserService} from './services/user-service/user-service'

const app: Application = express()

/* Services declaration */
const serviceContainer = (new ServiceContainer())
    .addService(ServiceTypes.Fetch, () => fetch)
    .addService(ServiceTypes.PostService, (container: ServiceContainer) => new PostService(container))
    .addService(ServiceTypes.UserService, (container: ServiceContainer) => new UserService(container))

/* Routers declaration */
app
    .use('/posts', createPostRouter(serviceContainer))
    .use('/users', createUserRouter(serviceContainer))

export default app
