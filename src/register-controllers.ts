import {Application} from 'express'
import {ControllerFactoryFunction, ControllerInterface} from './controllers/interfaces/controller-interfaces'
import {createPostController, createUserController} from './controllers'

export const registerControllers = (app: Application) => {
    const factories: ControllerFactoryFunction[] = [
        createUserController,
        createPostController
    ]

    factories.forEach(factory => {
        const c: ControllerInterface = factory()
        app.use(c.getBasUrl(), c.getRouter())
    })
}
