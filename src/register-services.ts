import {ServiceContainer} from './services/core/service-container'
import {ServiceTypes} from './services/core/service-types'
import fetch from 'node-fetch'
import PostService from './services/post-service'
import {UserService} from './services/user-service'

export const registerServices = (serviceContainer: ServiceContainer) => serviceContainer
    .addService(ServiceTypes.Fetch, () => fetch)
    .addService(ServiceTypes.PostService, (container: ServiceContainer) => new PostService(container))
    .addService(ServiceTypes.UserService, (container: ServiceContainer) => new UserService(container))
