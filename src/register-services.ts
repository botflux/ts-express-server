import {ServiceContainer} from './core/services/service-container'
import {ServiceTypes} from './core/services/service-types'
import fetch from 'node-fetch'
import {createPostService, createUserService} from './services'
import {createLogger} from './services/logger'

export const registerServices = (serviceContainer: ServiceContainer) => serviceContainer
    .addService(ServiceTypes.Fetch, () => fetch)
    .addService(ServiceTypes.Logger, createLogger)
    .addService(ServiceTypes.PostService, createPostService)
    .addService(ServiceTypes.UserService, createUserService)
