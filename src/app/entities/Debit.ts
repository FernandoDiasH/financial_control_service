
interface IDebit{
    id?:number
    user_id:string
    description:string
    value:number
    category_id:number
    dt_purchase:string
    debit_type:string
}

export class Debit{
    constructor(data:IDebit){
        Object.assign(data, this)
    }
}
