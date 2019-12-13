import express, {Application} from 'express'
import createHomeRouter from './routers/home-router'
import PostService from './services/post-service'
import ServiceContainer from './services/service-container'
import fetch from 'node-fetch'
import {ServiceTypes} from './services/service-types'
import {UserService} from './services/user-service'

const app: Application = express()
const serviceContainer = (new ServiceContainer())
    .addService(ServiceTypes.Fetch, () => fetch)
    .addService(ServiceTypes.PostService, (container: ServiceContainer) => new PostService(container))
    .addService(ServiceTypes.UserService, (container: ServiceContainer) => new UserService(container))

app.use(createHomeRouter(serviceContainer))

const port: string | number = process.env.PORT || 3000

app.listen(port, () =>
    console.log(`Application is listening on port http://localhost:${port}`))
