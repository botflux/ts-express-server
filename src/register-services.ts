import {ServiceContainer} from './services/core/service-container'
import {ServiceTypes} from './services/core/service-types'
import fetch from 'node-fetch'
import {createPostService, createUserService} from './services'

export const registerServices = (serviceContainer: ServiceContainer) => serviceContainer
    .addService(ServiceTypes.Fetch, () => fetch)
    .addService(ServiceTypes.PostService, createPostService)
    .addService(ServiceTypes.UserService, createUserService)
