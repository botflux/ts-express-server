import {Application} from 'express'
import {MiddlewareInterface} from '../middlewares/interfaces/middlewares-interfaces'
import {ControllerInterface} from '../controllers/interfaces/controller-interfaces'
import {controllerRoutesToRouter} from '../controllers/controller-routes-to-router'

export abstract class ApplicationBootstrapper {

    private readonly _application: Application

    private static _globalMiddlewares: MiddlewareInterface[] = []
    private static _controllers: ControllerInterface[] = []

    constructor(application: Application) {
        this._application = application

        this.globalMiddlewares.forEach((middleware: MiddlewareInterface) => {
            this.application.use(middleware.invoke.bind(middleware))
        })

        this.controllers.forEach((controller: ControllerInterface) => {
            this.application.use(controller.getBasUrl(), controllerRoutesToRouter(controller.getControllerRoutes(), controller))
        })

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

    public static get globalMiddlewares () {
        return ApplicationBootstrapper._globalMiddlewares
    }

    protected get globalMiddlewares () {
        return ApplicationBootstrapper._globalMiddlewares
    }

    protected get controllers(): ControllerInterface[] {
        return ApplicationBootstrapper._controllers
    }

    public static get controllers(): ControllerInterface[] {
        return this._controllers
    }
}
