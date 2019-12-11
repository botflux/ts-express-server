import express, { Application, Request, Response } from 'express'
import createHomeRouter from './routers/home-router'

const app: Application = express()

app.use(createHomeRouter())

const port: string | number = process.env.PORT || 3000

app.listen(port, () =>
    console.log(`Application is listening on port http://localhost:${port}`))
