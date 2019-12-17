import {ServiceContainer} from '../services/service-container'

export abstract class BaseComponent {
    private static _container: ServiceContainer

    /**
     * Specify a service container
     * @param {ServiceContainer} container
     */
    public static setContainer (container: ServiceContainer) {
        BaseComponent._container = container
    }

    /**
     * Exposes the service container for sub classes
     */
    protected get container () {
        return BaseComponent._container
    }
}
