import {ControllerRoute} from './base-controller'
import {ControllerInterface, HttpMethod} from './interfaces/controller-interfaces'
import {ApplicationBootstrapper} from '../application/application-bootstrapper'

export const Route = (method: HttpMethod, url: string) =>
    (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        target.getControllerRoutes().push(new ControllerRoute(method, url, descriptor.value))
        return descriptor
    }

export const Controller = (baseUrl: string) =>
    <T extends{new(...args: any[]): ControllerInterface}>(constructor: T) => {
        const controller: ControllerInterface = new constructor()
        controller.setBaseUrl(baseUrl)
        ApplicationBootstrapper.controllers.push(controller)
    }
