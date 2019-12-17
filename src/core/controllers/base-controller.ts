import {BaseComponent} from '../application/base-component'
import {Handler} from 'express'
import {ControllerInterface, HttpMethod} from './interfaces/controller-interfaces'

export abstract class BaseController extends BaseComponent implements ControllerInterface {
    private controllerRoutes?: ControllerRoute[]

    public getControllerRoutes(): ControllerRoute[] {
        return this.controllerRoutes || this.initializeControllerRoutes()
    }

    public initializeControllerRoutes(): ControllerRoute[] {
        this.controllerRoutes = []
        return this.getControllerRoutes()
    }

    getBasUrl () {
        return ''
    }
}

export class ControllerRoute {
    private _method: HttpMethod
    private _url: string
    private _handler: Handler

    constructor(method: HttpMethod, url: string, handler: Handler) {
        this._method = method
        this._url = url
        this._handler = handler
    }

    get method(): HttpMethod {
        return this._method
    }

    set method(value: HttpMethod) {
        this._method = value
    }

    get url(): string {
        return this._url
    }

    set url(value: string) {
        this._url = value
    }

    get handler(): Handler {
        return this._handler
    }

    set handler(value: Handler) {
        this._handler = value
    }
}
