import { randomUUID } from "node:crypto"

interface DebitProps{
    user_id:string
    description:string
    value:number
    category_id:string
    dt_purchase:string
    debit_type:string
}

export class Debit{
    private _id:string
    private props: DebitProps

    constructor(props:DebitProps, id?:string){
        
        this._id = id ?? randomUUID()
        this.props = props
    }
}
