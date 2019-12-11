import { Router, Request, Response } from 'express'

export default (): Router => {
    const router: Router = Router()

    router
        .get('/', (req: Request, res: Response) => res.send('hello world from home'))
        .get('/:id', (req: Request, res: Response) => res.send('hello world from home ' + req.params.id))

    return router
}
