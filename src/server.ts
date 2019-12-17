import express, {Application} from 'express'
import {App} from './app'

const app: Application = express()
const port: string | number = process.env.PORT || 3000

new App(app).listen(port)
