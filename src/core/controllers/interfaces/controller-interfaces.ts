import {ControllerRoute} from '../base-controller'

export interface ControllerInterface {
    getBasUrl(): string
    setBaseUrl(url: string): void
    getControllerRoutes(): ControllerRoute[]
}

export interface ControllerFactoryFunction {
    (): ControllerInterface
}

export enum HttpMethod {
    Get,
    Post,
    Delete,
    Put
}
