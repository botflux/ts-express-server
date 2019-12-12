import Post from '../models/post'

export interface FindPostInterface {
    (id: number): Post
}

export interface FindAllPostInterface {
    (): Post[]
}

export default interface PostServiceInterface {
    find: FindPostInterface,
    findAll: FindAllPostInterface
}
