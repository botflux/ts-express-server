import { RequestInit, Response } from 'node-fetch'

export interface FetchFunctionInterface {
    (url: string, options?: RequestInit): Promise<Response>
}
