import {Application, Router} from 'express'
import {ServiceContainer} from '../../services/core/service-container'
import {PostController} from '../post-controller'
import { mappingToRouter } from './mapping-to-router'
import {BaseController} from '../base-controller'
import {UserController} from '../user-controller'

export const registerControllers = (app: Application, serviceContainer: ServiceContainer) => {
    // app
    //     .use('/posts', createPostRouter(serviceContainer))
    //     .use('/users', createUserRouter(serviceContainer))

    const controllers: BaseController[] = [
        new PostController(serviceContainer),
        new UserController(serviceContainer)
    ]

    controllers.forEach((controller: BaseController) => {
        const mapping = controller.getMapping()

        if (!mapping) throw new Error('No mapping found')

        const router: Router = mappingToRouter<BaseController>(mapping, controller)
        app.use(mapping.baseUrl, router)
    })

    // const postController = new PostController(serviceContainer)
    //
    // const mapping = postController.getMapping()
    // if (!mapping) throw new Error('No mapping found for PostController')
    //
    // const router: Router = mappingToRouter<PostController>(mapping, postController)
    // app.use(mapping.baseUrl, router)
    //
    // // Routes are pushed from the decorator. Now, we need to transform the RouteMapping into a e.Router object.
    // console.log(postController.getMapping())
}
