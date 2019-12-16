import {DummyServiceInterface} from './interfaces/dummy-service-interface'
import {Service} from './core/decorators'
import {ServiceTypes} from './core/service-types'

@Service(ServiceTypes.DummyService)
export default class DummyService implements DummyServiceInterface {
    do (str: string): Promise<string> {
        return Promise.resolve(str)
    }
}
