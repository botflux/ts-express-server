import { ServiceFactoryInterface } from './service-interface'

export default class ServiceContainer {

    private services: ServiceContainerElement[]

    constructor() {
        this.services = []
    }

    addService(name: string, serviceFactory: ServiceFactoryInterface): this {
        this.services = [ ...this.services, new ServiceContainerElement(name, serviceFactory, this) ]
        return this
    }

    getService(name: string): any {
        const serviceContainerElement: ServiceContainerElement | undefined = this.services.find(sc => sc.name === name)
        // TODO: Add service not found exception when no service
        return serviceContainerElement ? serviceContainerElement.service : undefined
    }
}

/**
 * Handles a service instantiation
 */
export class ServiceContainerElement {
    private readonly _name: string
    private readonly _serviceFactory: ServiceFactoryInterface
    private readonly _container: ServiceContainer

    private _service?: any

    constructor(name: string, serviceFactory: ServiceFactoryInterface, container: ServiceContainer) {
        this._name = name
        this._serviceFactory = serviceFactory
        this._container = container
    }

    get name(): string {
        return this._name
    }

    get serviceFactory(): ServiceFactoryInterface {
        return this._serviceFactory
    }

    get service (): any {
        if (!this._service)
            this._service = this.serviceFactory(this._container)

        return this._service
    }
}
