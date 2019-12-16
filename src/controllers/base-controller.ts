import {ServiceContainer} from '../services/core/service-container'

export abstract class BaseController {
    private static _container: ServiceContainer

    public static setContainer (container: ServiceContainer) {
        BaseController._container = container
    }

    protected get container () {
        return BaseController._container
    }
}
