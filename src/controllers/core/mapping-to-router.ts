import {RouteMapping, RouteMappingElement} from '../base-controller'
import {Router} from 'express'

export const mappingToRouter = <T> (mapping: RouteMapping, controllerInstance: T) => {
    return mapping.elements.reduce((router: Router, mappingElement: RouteMappingElement) => {
        switch (mappingElement.method) {
            case 'get':
                router.get(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'post':
                router.get(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
        }

        return router
    }, Router())
}
