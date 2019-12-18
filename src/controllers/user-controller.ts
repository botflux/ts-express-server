import {BaseController} from '../core/controllers/base-controller'
import {ControllerInterface, HttpMethod} from '../core/controllers/interfaces/controller-interfaces'
import {NextFunction, Request, Response} from 'express'
import {ServiceTypes} from '../core/services/service-types'
import {ApiServiceInterface} from '../services/interfaces/api-service-interface'
import {User} from '../models/user'
import {Controller, Route} from '../core/controllers/decorators'

@Controller('/users')
export class UserController extends BaseController {
    private readonly _userService: ApiServiceInterface<User>

    constructor() {
        super()
        this._userService = this.container.getService(ServiceTypes.UserService)
    }

    @Route(HttpMethod.Get, '/')
    findAll(req: Request, res: Response, next: NextFunction) {
        this._userService.findAll()
            .then((posts: User[]) => res.json(posts))
            .catch((error: Error) => next(error))
    }

    @Route(HttpMethod.Get, '/:id')
    find(req: Request, res: Response, next: NextFunction) {
        this._userService.find(req.params.id)
            .then((post: User) => res.json(post))
            .catch((error: Error) => next(error))
    }
}
