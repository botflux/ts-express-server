import {BaseController} from './base-controller'
import {ServiceContainer} from '../services/core/service-container'
import {ServiceTypes} from '../services/core/service-types'
import {Request, Response, NextFunction} from 'express'
import {User} from '../models/user'
import {ControllerBaseUrl, Get} from './core/decorators'
import {UserServiceInterface} from '../services/interfaces/user-service-interface'

@ControllerBaseUrl('/users')
export class UserController extends BaseController {
    private readonly _userService: UserServiceInterface

    constructor(container: ServiceContainer) {
        super()
        this._userService = container.getService(ServiceTypes.UserService)
    }

    @Get('/')
    findAll(req: Request, res: Response, next: NextFunction) {
        this._userService.findAll()
            .then((users: User[]) => res.json(users))
            .catch(error => next(error))
    }

    @Get('/:id')
    find(req: Request, res: Response, next: NextFunction) {
        this._userService.find(Number.parseInt(req.params.id))
            .then((user: User) => res.json(user))
            .catch(error => next(error))
    }
}
