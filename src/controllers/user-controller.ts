import BaseController from './base-controller'
import ServiceContainer from '../services/service-core/service-container'
import {UserService} from '../services/user-service/user-service'
import {ServiceTypes} from '../services/service-core/service-types'
import {Request, Response, NextFunction} from 'express'
import User from '../models/user'
import {Controller, Get} from './core/decorators'

@Controller('/users')
export default class UserController extends BaseController {
    private readonly _userService: UserService

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
