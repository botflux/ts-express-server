import {BaseController} from '../core/controllers/base-controller'
import {ControllerInterface, HttpMethod} from '../core/controllers/interfaces/controller-interfaces'
import {NextFunction, Request, Response} from 'express'
import {ServiceTypes} from '../core/services/service-types'
import {ApiServiceInterface} from '../services/interfaces/api-service-interface'
import {Post} from '../models/post'
import {Controller, Route} from '../core/controllers/decorators'

@Controller('')
export class PostController extends BaseController {
    private readonly _postService: ApiServiceInterface<Post>

    constructor() {
        super()
        console.log('post controller',this.container)
        this._postService = this.container.getService(ServiceTypes.PostService)
    }

    @Route(HttpMethod.Get, '/list')
    findAll(req: Request, res: Response, next: NextFunction) {
        this._postService.findAll()
            .then((posts: Post[]) => res.json(posts))
            .catch((error: Error) => next(error))
    }

    @Route(HttpMethod.Get, '/:id')
    find(req: Request, res: Response, next: NextFunction) {
        this._postService.find(req.params.id)
            .then((post: Post) => res.json(post))
            .catch((error: Error) => next(error))
    }

    getBasUrl() {
        return '/posts'
    }
}
