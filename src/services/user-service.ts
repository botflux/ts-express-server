import {ServiceContainer} from '../core/services/service-container'
import {FetchFunctionInterface} from './interfaces/fetch-function-interface'
import {ServiceTypes} from '../core/services/service-types'
import {Response} from 'node-fetch'
import {User} from '../models/user'
import {ApiServiceInterface} from './interfaces/api-service-interface'
import {Service} from '../core/services/decorators'
import {BaseService} from '../core/services/base-service'

@Service(ServiceTypes.UserService)
export class UserService extends BaseService implements ApiServiceInterface<User> {
    private fetch: FetchFunctionInterface

    constructor() {
        super()
        this.fetch = this.container.getService(ServiceTypes.Fetch).fetch
    }

    find(id: number | string) {
        return this.fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response: Response) => response.json())
            .then((user: User) => user)
    }

    findAll() {
        return this.fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response: Response) => response.json())
            .then((users: User[]) => users)
    }
}

// export const createUserService = (serviceContainer: ServiceContainer) => new UserService(serviceContainer)
