import {Request, Response, Router} from 'express'
import Post from '../models/post'
import ServiceContainer from '../services/service-container'
import PostServiceInterface from '../services/post-service-interface'
import {ServiceTypes} from '../services/service-types'

export default (serviceContainer: ServiceContainer): Router => {
    const router: Router = Router()
    const postService: PostServiceInterface = serviceContainer.getService(ServiceTypes.PostService)

    router
        .get('/', (req: Request, res: Response) => {
            postService
                .findAll()
                .then((posts: Post[]) => res.json(posts))
                .catch(error => res.status(500).json(error))
        })
        .get('/:id', (req: Request, res: Response) => {
            postService
                .find(Number.parseInt(req.params.id))
                .then((post: Post) => res.json(post))
                .catch(error => res.status(500).json(error))
        })

    return router
}
