import {ApplicationBootstrapper} from './core/application/application-bootstrapper'
import { Request, Response} from 'express'
import './services'
import './controllers'
import './middlewares'

export class App extends ApplicationBootstrapper{
    onInit(): void {
        console.log('Application initialized')
        this.application.get('/', (req: Request, res: Response) => res.send('hello'))
    }

    onListening(port: string | number): void {
        console.log(`Application is listening on http://localhost:${port}`)
    }
}
