import {ControllerRoute} from './base-controller'
import {Router} from 'express'
import {ControllerInterface, HttpMethod} from './interfaces/controller-interfaces'

export const controllerRoutesToRouter = (controllerRoutes: ControllerRoute[], controller: ControllerInterface) =>
    controllerRoutes.reduce((router: Router, controllerRoute: ControllerRoute) => {
        switch (controllerRoute.method) {
            case HttpMethod.Get:
                router.get(controllerRoute.url, controllerRoute.handler.bind(controller))
                break
            case HttpMethod.Post:
                router.post(controllerRoute.url, controllerRoute.handler.bind(controller))
                break
            case HttpMethod.Put:
                router.put(controllerRoute.url, controllerRoute.handler.bind(controller))
                break
            case HttpMethod.Delete:
                router.delete(controllerRoute.url, controllerRoute.handler.bind(controller))
                break
        }

        return router
    }, Router())
