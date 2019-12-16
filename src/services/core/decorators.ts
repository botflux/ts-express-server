import ServiceRecorder from './service-recorder'
import {ServiceTypes} from './service-types'

export const Service = (serviceType: ServiceTypes) =>
    (target: any) => {
        console.log('hello')
        ServiceRecorder.serviceContainer.addService(serviceType, serviceContainer => target(serviceContainer))
    }
