import Post from '../models/post'

export interface FindPostInterface {
    (id: number): Promise<Post>
}

export interface FindAllPostInterface {
    (): Promise<Post[]>
}

export default interface PostServiceInterface {
    find: FindPostInterface,
    findAll: FindAllPostInterface
}
