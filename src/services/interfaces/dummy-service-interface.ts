export interface DummyDoFunctionInterface {
    (str: string): Promise<string>
}

export default interface DummyServiceInterface {
    do: DummyDoFunctionInterface
}
