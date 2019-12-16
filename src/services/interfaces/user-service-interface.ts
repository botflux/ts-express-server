import {User} from '../../models/user'

export interface FindUserInterface {
    (id: number): Promise<User>
}

export interface FindAllUserInterface {
    (): Promise<User[]>
}

export interface UserServiceInterface {
    find: FindUserInterface,
    findAll: FindAllUserInterface
}
