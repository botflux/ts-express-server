import {BaseController} from './base-controller'
import {ControllerInterface} from './interfaces/controller-interfaces'
import {Router, Request, Response, NextFunction} from 'express'
import {ServiceTypes} from '../services/core/service-types'
import {ApiServiceInterface} from '../services/interfaces/api-service-interface'
import {User} from '../models/user'

export class UserController extends BaseController implements ControllerInterface {
    private readonly _userService: ApiServiceInterface<User>

    constructor() {
        super()
        this._userService = this.container.getService(ServiceTypes.UserService)
    }

    findAll(req: Request, res: Response, next: NextFunction) {
        this._userService.findAll()
            .then((posts: User[]) => res.json(posts))
            .catch((error: Error) => next(error))
    }

    find(req: Request, res: Response, next: NextFunction) {
        this._userService.find(req.params.id)
            .then((post: User) => res.json(post))
            .catch((error: Error) => next(error))
    }

    getRouter (): Router {
        const globalRouter = Router()
        globalRouter.get('/', this.findAll.bind(this))
        globalRouter.get('/:id', this.find.bind(this))
        return globalRouter
    }

    getBasUrl() {
        return '/users'
    }
}

export const createUserController = (): ControllerInterface =>
    new UserController()
