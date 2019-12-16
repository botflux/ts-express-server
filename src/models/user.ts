export class User {
    private _id: number
    private _name: string
    private _email: string
    private _phone: string
    private _website: string

    constructor(id: number, name: string, email: string, phone: string, website: string) {
        this._id = id
        this._name = name
        this._email = email
        this._phone = phone
        this._website = website
    }

    get id(): number {
        return this._id
    }

    set id(value: number) {
        this._id = value
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get email(): string {
        return this._email
    }

    set email(value: string) {
        this._email = value
    }

    get phone(): string {
        return this._phone
    }

    set phone(value: string) {
        this._phone = value
    }

    get website(): string {
        return this._website
    }

    set website(value: string) {
        this._website = value
    }
}
