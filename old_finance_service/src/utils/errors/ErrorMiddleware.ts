import { NextFunction, Request, Response } from "express"
import { ErrorBase } from "./ErrorBase"

export const errorMiddleware = (err:ErrorBase, req:Request, res:Response, next:NextFunction)=>{
    const ENVIROMENT = process.env.ENVIROMENT

    const errorMessage = err.message
    const statusCode = !err.code ? 500 : err.code
    const errorName = err.name
    const extraInfo = ENVIROMENT == "prod" ? {} : err.stack

    if(ENVIROMENT != "prod"){
        console.log(extraInfo)
    }

    return res.status(statusCode).json({
        name:errorName,
        message: errorMessage,
        status:statusCode, 
        extraInfo:extraInfo
    })
}