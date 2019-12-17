import {ControllerRoute} from '../base-controller'

export interface ControllerInterface {
    getBasUrl(): string
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
