import { Router, Request, Response } from 'express'
import PostService from '../services/post-service'
import Post from '../models/post'
import ApplicationDependencies from '../services/application-dependecies'

export default (dependencies: ApplicationDependencies): Router => {
    const router: Router = Router()

    router
        .get('/', (req: Request, res: Response) => {
            dependencies.postService
                .findAll()
                .then((posts: Post[]) => res.json(posts))
                .catch(error => res.status(500).json(error))
        })
        .get('/:id', (req: Request, res: Response) => {
            dependencies.postService
                .find(Number.parseInt(req.params.id))
                .then((post: Post) => res.json(post))
                .catch(error => res.status(500).json(error))
        })

    return router
}
