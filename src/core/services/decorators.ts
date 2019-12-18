import {ServiceTypes} from './service-types'
import {BaseComponent} from '../application/base-component'

export const Service = (serviceType: ServiceTypes) =>
    <T extends{new(...args: any[]): {}}>(constructor: T) => {
        BaseComponent.container.addService(serviceType, () => new constructor())
    }
