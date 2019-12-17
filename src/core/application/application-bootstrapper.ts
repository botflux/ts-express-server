import {Application} from 'express'

export abstract class ApplicationBootstrapper {

    private readonly _application: Application

    constructor(application: Application) {
        this._application = application
        this.onInit()
    }

    /**
     * Wrapper around express.Application.listen() function.
     *
     * @param {string|number} port
     */
    public listen (port: string | number) {
        this._application.listen(port, this.onListening.bind(this, port))
    }

    /**
     * Called when the server is listening
     */
    public abstract onListening (port: string | number): void

    /**
     * Called after the constructor
     */
    public abstract onInit (): void

    protected get application(): Application {
        return this._application
    }
}
