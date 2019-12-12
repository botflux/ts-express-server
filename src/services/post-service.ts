import PostServiceInterface from './post-service-interface'
import Post from '../models/post'
import fetch, { Response } from 'node-fetch'

export default class PostService implements PostServiceInterface {
    find (id: number): Promise<Post> {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response: Response) => response.json())
            .then((post: Post) => post)
    }

    findAll (): Promise<Post[]> {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response: Response) => response.json())
            .then((posts: Post[]) => posts)
    }
}
