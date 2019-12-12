import express, { Application, Request, Response } from 'express'
import createHomeRouter from './routers/home-router'
import ApplicationDependencies from './services/application-dependecies'
import PostService from './services/post-service'
import PostServiceInterface from './services/post-service-interface'

const app: Application = express()
const postService: PostServiceInterface = new PostService()
const appDependencies = new ApplicationDependencies(postService)

app.use(createHomeRouter(appDependencies))

const port: string | number = process.env.PORT || 3000

app.listen(port, () =>
    console.log(`Application is listening on port http://localhost:${port}`))
