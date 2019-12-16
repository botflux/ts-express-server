import {RouteMapping} from '../base-controller'

export class ControllerRecorder {
    private _mappings: RouteMapping[] = []

    public addMapping (mapping: RouteMapping) {
        this._mappings.push(mapping)
    }

    public getMappings (): RouteMapping[] {
        return this._mappings
    }
}

export default new ControllerRecorder()
