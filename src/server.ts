import express from 'express'
import {setupApp} from './setup-app'

const app = express()
const port: string | number = process.env.PORT || 3000

setupApp(app)

app.listen(port, () =>
    console.log(`Application is listening on port http://localhost:${port}`))
