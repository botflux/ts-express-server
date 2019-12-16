import {RouteMapping} from '../base-controller'

// TODO: Declare smaller decorators for Controllers
// TODO: This way we will have, for example, a @ControllerBaseUrl, @RegisterController and a @Controller that register the precedents decorators

// TODO: To achieve the @RegisterController, we need to create a ControllerFactory class.
// TODO: Because each Controller need the ServiceContainer, we need to declare a global ServiceContainer or ServiceFactory
// TODO: We can't do the trick by using the ControllerFactory has a service because it will be dependent of setup-app.ts

export const Get = (url: string) =>
    (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const mapping: RouteMapping = target.getMapping () || target.initializeMapping()
        mapping.addElement('get', url, descriptor.value)

        return descriptor
    }

export const ControllerBaseUrl = (url: string) =>
    (target: Function) => {
        const mapping: RouteMapping = target.prototype.getMapping() || target.prototype.initializeMapping()
        mapping.baseUrl = url
    }

export const RegisterController = () =>
    (target: Function) => {
        // console.log(target())
    }
