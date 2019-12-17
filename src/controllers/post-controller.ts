import {BaseController} from '../core/controllers/base-controller'
import {ControllerInterface} from '../core/controllers/interfaces/controller-interfaces'
import {Router, Request, Response, NextFunction} from 'express'
import {ServiceTypes} from '../core/services/service-types'
import {ApiServiceInterface} from '../services/interfaces/api-service-interface'
import {Post} from '../models/post'

export class PostController extends BaseController implements ControllerInterface {
    private readonly _postService: ApiServiceInterface<Post>

    constructor() {
        super()
        this._postService = this.container.getService(ServiceTypes.PostService)
    }

    findAll(req: Request, res: Response, next: NextFunction) {
        this._postService.findAll()
            .then((posts: Post[]) => res.json(posts))
            .catch((error: Error) => next(error))
    }

    find(req: Request, res: Response, next: NextFunction) {
        this._postService.find(req.params.id)
            .then((post: Post) => res.json(post))
            .catch((error: Error) => next(error))
    }

    getRouter (): Router {
        const globalRouter = Router()
        globalRouter.get('/', this.findAll.bind(this))
        globalRouter.get('/:id', this.find.bind(this))
        return globalRouter
    }

    getBasUrl() {
        return '/posts'
    }
}

export const createPostController = (): ControllerInterface =>
    new PostController()
