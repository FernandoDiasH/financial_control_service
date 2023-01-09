import { ErrorBase } from "./ErrorBase"

export class InternalError extends ErrorBase{

    constructor(
        message: string = 'Um erro inesperado ocorreu',
        code: number = 500,
        description?: string
    ){
        super(message)
        this.name = this.constructor.name
        this.code = code
        this.description = description
        Error.captureStackTrace(this, this.constructor)
    }
}