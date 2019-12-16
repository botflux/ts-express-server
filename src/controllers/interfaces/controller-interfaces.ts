import {Router} from 'express'

export interface GetRouterInterface {
    (): Router
}

export interface GetBaseUrlInterface {
    (): string
}

export interface ControllerInterface {
    getRouter: GetRouterInterface
    getBasUrl: GetBaseUrlInterface
}
