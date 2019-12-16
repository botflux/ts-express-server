import { RequestInit, Response } from 'node-fetch'

export default interface FetchFunctionInterface {
    (url: string, options?: RequestInit): Promise<Response>
}
