import {Request, Response, Router} from 'express'
import ServiceContainer from '../services/core/service-container'
import {ServiceTypes} from '../services/core/service-types'
import UserServiceInterface from '../services/user-service/user-service-interface'
import User from '../models/user'

export default (serviceContainer: ServiceContainer): Router => {
    const router: Router = Router()
    const userService: UserServiceInterface = serviceContainer.getService(ServiceTypes.UserService)

    router
        .get('/', (req: Request, res: Response) => {
            userService
                .findAll()
                .then((users: User[]) => res.json(users))
                .catch(error => res.status(500).json(error))
        })
        .get('/:id', (req: Request, res: Response) => {
            userService
                .find(Number.parseInt(req.params.id))
                .then((user: User) => res.json(user))
                .catch(error => res.status(500).json(error))
        })

    return router
}
