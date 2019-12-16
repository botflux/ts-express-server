import {ServiceContainer} from './service-container'

export interface ServiceFactoryInterface {
    (serviceContainer: ServiceContainer): any
}
