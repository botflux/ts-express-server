import PostServiceInterface from './post-service-interface'
import Post from '../models/post'

export default class PostService implements PostServiceInterface {
    find (id: number): Post {
        return new Post(1, 1, 'hello', 'world')
    }

    findAll (): Post[] {
        return [
            new Post(1, 1, 'hello', 'world')
        ]
    }
}
