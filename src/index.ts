import express, { Application } from 'express'
import createHomeRouter from './routers/home-router'
import PostService from './services/post-service'
import ServiceContainer from './services/service-container'
import fetch from 'node-fetch'

const app: Application = express()
const serviceContainer = (new ServiceContainer())
    .addService('fetch', () => fetch)
    .addService('postService', (container: ServiceContainer) => new PostService(container))

app.use(createHomeRouter(serviceContainer))

const port: string | number = process.env.PORT || 3000

app.listen(port, () =>
    console.log(`Application is listening on port http://localhost:${port}`))
