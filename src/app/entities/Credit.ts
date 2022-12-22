import { randomUUID } from "crypto"

interface CreditProps{
    user_id:string
    category_id:string
    description:string
    installment_value:number
    dt_due: Date
    credit_status?:Date | null
}

export class Credit{
    
    private _id:string
    private props:CreditProps
    
    
    constructor(props:CreditProps, id?:string){
        this._id = id ?? randomUUID()
        this.props = {
            ...props,
            credit_status: null
        }
    }

    pay(){
        this.props.credit_status = new Date()
    }
}
