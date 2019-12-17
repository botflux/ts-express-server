import {PostServiceInterface} from './interfaces/post-service-interface'
import {Post} from '../models/post'
import {Response} from 'node-fetch'
import {ServiceContainer} from '../core/services/service-container'
import {FetchFunctionInterface} from './interfaces/fetch-function-interface'
import {ServiceTypes} from '../core/services/service-types'
import {ApiServiceInterface} from './interfaces/api-service-interface'

export class PostService implements ApiServiceInterface<Post> {

    private fetch: FetchFunctionInterface

    constructor(serviceContainer: ServiceContainer) {
        this.fetch = serviceContainer.getService(ServiceTypes.Fetch)
    }

    find (id: number | string): Promise<Post> {
        return this.fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response: Response) => response.json())
            .then((post: Post) => post)
    }

    findAll (): Promise<Post[]> {
        return this.fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response: Response) => response.json())
            .then((posts: Post[]) => posts)
    }
}

export const createPostService = (serviceContainer: ServiceContainer) => new PostService(serviceContainer)
