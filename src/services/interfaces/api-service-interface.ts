export interface ApiServiceFindAllInterface<TModel> {
    (): Promise<TModel[]>
}

export interface ApiServiceFindInterface<TModel> {
    (id: string | number): Promise<TModel>
}

export interface ApiServiceInterface<TModel> {
    findAll: ApiServiceFindAllInterface<TModel>
    find: ApiServiceFindInterface<TModel>
}
