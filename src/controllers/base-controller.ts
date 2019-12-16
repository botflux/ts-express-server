import { Handler } from 'express'

export default class BaseController {
    private _mapping?: RouteMapping

    getMapping(): RouteMapping | undefined {
        return this._mapping
    }

    initializeMapping() {
        this._mapping = new RouteMapping()
        return this._mapping
    }
}

export class RouteMapping {
    private _baseUrl: string
    private _elements: RouteMappingElement[] = []

    constructor(baseUrl: string = '') {
        this._baseUrl = baseUrl
    }

    get baseUrl(): string {
        return this._baseUrl
    }

    set baseUrl(baseUrl: string) {
        this._baseUrl = baseUrl
    }

    get elements(): RouteMappingElement[] {
        return this._elements
    }

    addElement (method: string, url: string, handler: Handler) {
        this._elements.push(new RouteMappingElement(method, url, handler))
    }
}

export class RouteMappingElement {
    private readonly _method: string
    private readonly _url: string
    private readonly _handler: Handler

    constructor(method: string, url: string, handler: Handler) {
        this._method = method
        this._url = url
        this._handler = handler
    }

    get method(): string {
        return this._method
    }

    get url(): string {
        return this._url
    }

    get handler(): Handler {
        return this._handler
    }
}
