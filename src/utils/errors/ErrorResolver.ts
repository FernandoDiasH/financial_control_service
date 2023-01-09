import { NextFunction, Request, Response } from "express"

const resolver = (handlerFunction:Function) => {
    return (req:Request, res:Response, next:NextFunction) =>{
        return Promise.resolve(handlerFunction(req, res, next)).catch(e => next(e))
    }
}

export {resolver}