interface ICredit{
    id?:number
    user_id:string
    category_id:number
    description:string
    installment_value:number
    dt_due:string
    credit_status:string
}

export class Credit{
    constructor(data:ICredit){
        Object.assign(data, this)
    }
}
