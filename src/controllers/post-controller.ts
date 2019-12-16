import {ServiceContainer} from '../services/core/service-container'
import {ServiceTypes} from '../services/core/service-types'
import {NextFunction, Request, Response} from 'express'
import {Post} from '../models/post'
import {ControllerBaseUrl, Get} from './core/decorators'
import {BaseController} from './base-controller'
import {ApiServiceInterface} from '@services/interfaces/api-service-interface'

@ControllerBaseUrl('/posts')
export class PostController extends BaseController {
    private _postService: ApiServiceInterface<Post>

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
