import ServiceContainer from './service-core/service-container'
import {ServiceTypes} from './service-core/service-types'
import fetch from 'node-fetch'
import PostService from './post-service/post-service'
import {UserService} from './user-service/user-service'

export const registerServices = (serviceContainer: ServiceContainer) => serviceContainer
    .addService(ServiceTypes.Fetch, () => fetch)
    .addService(ServiceTypes.PostService, (container: ServiceContainer) => new PostService(container))
    .addService(ServiceTypes.UserService, (container: ServiceContainer) => new UserService(container))
