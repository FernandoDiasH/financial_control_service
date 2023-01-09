import { ErrorBase } from "./ErrorBase";

export class NotFoundError extends ErrorBase{
    constructor(
        message: string = 'Not Found',
        code: number = 400,
        description?: string
    ){
        super(message)
        this.name = this.constructor.name
        this.code = code
        this.description = description
        Error.captureStackTrace(this, this.constructor)
    }
}
