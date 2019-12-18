import nodeFetch, {RequestInfo, RequestInit, Response} from 'node-fetch'
import {Service} from '../core/services/decorators'
import {ServiceTypes} from '../core/services/service-types'

@Service(ServiceTypes.Fetch)
export class Fetcher {
    fetch (info: RequestInfo, init: RequestInit): Promise<Response> {
        return nodeFetch(info, init)
    }
}
