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
            case 'delete':
                router.delete(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'put':
                router.put(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'options':
                router.options(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'patch':
                router.patch(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'head':
                router.head(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'connect':
                router.connect(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
            case 'trace':
                router.trace(mappingElement.url, mappingElement.handler.bind(controllerInstance))
                break
        }

        return router
    }, Router())
}
