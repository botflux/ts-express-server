import {ApplicationBootstrapper} from './core/application/application-bootstrapper'

export class App extends ApplicationBootstrapper{
    onInit(): void {
        console.log('Application initialized')
    }

    onListening(port: string | number): void {
        console.log(`Application is listening on http://localhost:${port}`)
    }
}
