import {Post} from '../models/post'
import {Response} from 'node-fetch'
import {ServiceContainer} from '../core/services/service-container'
import {FetchFunctionInterface} from './interfaces/fetch-function-interface'
import {ServiceTypes} from '../core/services/service-types'
import {ApiServiceInterface} from './interfaces/api-service-interface'
import {Service} from '../core/services/decorators'
import {BaseService} from '../core/services/base-service'

@Service(ServiceTypes.PostService)
export class PostService extends BaseService implements ApiServiceInterface<Post> {

    private fetch: FetchFunctionInterface

    constructor() {
        super()
        this.fetch = this.container.getService(ServiceTypes.Fetch).fetch
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
