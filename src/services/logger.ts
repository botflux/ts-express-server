import {LoggerInterface} from './interfaces/logger-interface'

export class Logger implements LoggerInterface {
    log(name: string, content: string): this {
        console.log(`[${new Date()}] ${name}: ${content}`)
        return this
    }
}

export const createLogger = () => new Logger()
