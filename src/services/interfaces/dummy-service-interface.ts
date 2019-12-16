export interface DummyDoFunctionInterface {
    (str: string): Promise<string>
}

export interface DummyServiceInterface {
    do: DummyDoFunctionInterface
}
