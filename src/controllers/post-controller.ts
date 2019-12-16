import {ServiceContainer} from '../services/core/service-container'
import {PostServiceInterface} from '../services/interfaces/post-service-interface'
import {ServiceTypes} from '../services/core/service-types'
import {NextFunction, Request, Response} from 'express'
import {Post} from '../models/post'
import {ControllerBaseUrl, Get} from './core/decorators'
import {BaseController} from './base-controller'

// Controllers inherit from BaseController class, this class contain a field that stores
// a mapping (we simply register method -> handler | handler[])

// We implements a method to convert this mapping in a router, this functions will be outside of the BaseController.
// It will be in the registerControllers functions

@ControllerBaseUrl('/posts')
export class PostController extends BaseController {
    private _postService: PostServiceInterface

    constructor(container: ServiceContainer) {
        super()
        this._postService = container.getService(ServiceTypes.PostService)
    }

    @Get('/')
    findAll (req: Request, res: Response, next: NextFunction) {
        this._postService.findAll()
            .then((posts: Post[]) => res.json(posts))
            .catch((error: Error) => next(error))
    }

    @Get('/:id')
    find(req: Request, res: Response, next: NextFunction) {
        this._postService.find(Number.parseInt(req.params.id))
            .then((post: Post) => res.json(post))
            .catch((error: Error) => next(error))
    }
}
