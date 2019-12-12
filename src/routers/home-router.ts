import { Router, Request, Response } from 'express'
import PostService from '../services/post-service'
import Post from '../models/post'

export default (): Router => {
    const router: Router = Router()

    router
        .get('/', (req: Request, res: Response) => {
            new PostService()
                .findAll()
                .then((posts: Post[]) => res.json(posts))
                .catch(error => res.status(500).json(error))
        })
        .get('/:id', (req: Request, res: Response) => {
            new PostService()
                .find(Number.parseInt(req.params.id))
                .then((post: Post) => res.json(post))
                .catch(error => res.status(500).json(error))
        })

    return router
}
