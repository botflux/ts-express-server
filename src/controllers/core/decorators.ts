import {RouteMapping} from '../base-controller'

export const Get = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('get', url, descriptor.value)

        return descriptor
    }

export const Post = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('post', url, descriptor.value)

        return descriptor
    }

export const Delete = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('delete', url, descriptor.value)

        return descriptor
    }

export const Put = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('put', url, descriptor.value)

        return descriptor
    }

export const Options = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('options', url, descriptor.value)

        return descriptor
    }

export const Patch = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('patch', url, descriptor.value)

        return descriptor
    }

export const Head = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('head', url, descriptor.value)

        return descriptor
    }

export const Connect = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('connect', url, descriptor.value)

        return descriptor
    }

export const Trace = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('trace', url, descriptor.value)

        return descriptor
    }

export const ControllerBaseUrl = (url: string) =>
    (target: Function) => {
        const mapping: RouteMapping = target.prototype.getMapping() || target.prototype.initializeMapping()
        mapping.baseUrl = url
    }
