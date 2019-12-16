import { ServiceFactoryInterface } from './service-interface'
import { ServiceTypes } from './service-types'

export class ServiceContainer {

    private services: ServiceContainerElement[]

    constructor() {
        this.services = []
    }

    addService(type: ServiceTypes, serviceFactory: ServiceFactoryInterface): this {
        this.services = [ ...this.services, new ServiceContainerElement(type, serviceFactory, this) ]
        return this
    }

    getService(type: ServiceTypes): any {
        const serviceContainerElement: ServiceContainerElement | undefined = this.services.find(sc => sc.type === type)
        // TODO: Add service not found exception when no service
        return serviceContainerElement ? serviceContainerElement.service : undefined
    }
}

/**
 * Handles a service instantiation
 */
export class ServiceContainerElement {
    private readonly _type: ServiceTypes
    private readonly _serviceFactory: ServiceFactoryInterface
    private readonly _container: ServiceContainer

    private _service?: any

    constructor(type: ServiceTypes, serviceFactory: ServiceFactoryInterface, container: ServiceContainer) {
        this._type = type
        this._serviceFactory = serviceFactory
        this._container = container
    }

    get type(): ServiceTypes {
        return this._type
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
