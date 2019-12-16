import PostServiceInterface from './interfaces/post-service-interface'
import Post from '../models/post'
import {Response} from 'node-fetch'
import ServiceContainer from './core/service-container'
import FetchFunctionInterface from './interfaces/fetch-function-interface'
import {ServiceTypes} from './core/service-types'

export default class PostService implements PostServiceInterface {

    private fetch: FetchFunctionInterface

    constructor(serviceContainer: ServiceContainer) {
        this.fetch = serviceContainer.getService(ServiceTypes.Fetch)
    }

    find (id: number): Promise<Post> {
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
