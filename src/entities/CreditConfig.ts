interface ICreditConfig{
    id?:number
    user_id:string
    description:string
    limit_credit:number
    day_due:string
    credit_closing:string
}

export class CreditConfig{
    constructor(data:ICreditConfig){
        Object.assign(data, this)
    }
}
