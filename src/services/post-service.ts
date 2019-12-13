import PostServiceInterface from './post-service-interface'
import Post from '../models/post'
import fetch, {Response} from 'node-fetch'
import ServiceContainer from './service-container'
import FetchFunctionInterface from './node-fetch/fetch-function-interface'

export default class PostService implements PostServiceInterface {

    private fetch: FetchFunctionInterface

    constructor(serviceContainer: ServiceContainer) {
        this.fetch = serviceContainer.getService('fetch')
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
