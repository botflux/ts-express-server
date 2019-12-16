import UserServiceInterface from './interfaces/user-service-interface'
import ServiceContainer from './core/service-container'
import FetchFunctionInterface from './interfaces/fetch-function-interface'
import {ServiceTypes} from './core/service-types'
import {Response} from 'node-fetch'
import User from '../models/user'

export class UserService implements UserServiceInterface {
    private fetch: FetchFunctionInterface

    constructor(container: ServiceContainer) {
        this.fetch = container.getService(ServiceTypes.Fetch)
    }

    find(id: number) {
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
