import ServiceContainer from './service-container'

export class ServiceRecorder {
    private readonly _serviceContainer: ServiceContainer

    constructor() {
        this._serviceContainer = new ServiceContainer()
    }

    get serviceContainer(): ServiceContainer {
        return this._serviceContainer
    }
}

export default new ServiceRecorder()
