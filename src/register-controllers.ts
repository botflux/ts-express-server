import {Application} from 'express'
import {PostController} from './controllers/post-controller'

export const registerControllers = (app: Application) => {
    const postsController = new PostController()
    app.use(postsController.getBasUrl(), postsController.getRouter())
}
