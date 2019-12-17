import {LoggerInterface} from './interfaces/logger-interface'
import {Service} from '../core/services/decorators'
import {ServiceTypes} from '../core/services/service-types'

@Service(ServiceTypes.Logger)
export class Logger implements LoggerInterface {
    log(name: string, content: string): this {
        console.log(`[${new Date()}] ${name}: ${content}`)
        return this
    }
}
