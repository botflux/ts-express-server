import {Router} from 'express'
import {ControllerTypes} from '../core/controller-types'

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

export interface ControllerFactoryFunction {
    (): ControllerInterface
}

export type ControllerTuple = [ControllerTypes, ControllerFactoryFunction]
