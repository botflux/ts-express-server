import {RouteMapping} from '../base-controller'

export const Get = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('get', url, descriptor.value)

        return descriptor
    }

export const Controller = (url: string) =>
    (target: Function) => {
        const mapping: RouteMapping = target.prototype.getMapping() || target.prototype.initializeMapping()
        mapping.baseUrl = url
    }
