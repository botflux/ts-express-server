import PostServiceInterface from './post-service-interface'

export default class ApplicationDependencies {
    private readonly _postService: PostServiceInterface

    constructor(postService: PostServiceInterface) {
        this._postService = postService
    }

    get postService(): PostServiceInterface {
        return this._postService
    }
}
