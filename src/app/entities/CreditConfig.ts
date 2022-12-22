import { randomUUID } from "crypto"

interface CreditConfigProps{
    user_id: string
    description: string
    limit_credit: number
    day_due: number
    day_credit_closing: number
}

export class CreditConfig{
    private _id:string
    private props:CreditConfigProps

    constructor(props:CreditConfigProps, id?:string){
    
        this._id = id ?? randomUUID()
        this.props = props
    }

    get id (){
        return this._id        
    }

    get user_id (){
        return this.props.user_id
    }

    get description (){
        return this.props.description
    }

    get limit_credit (){
        return this.props.limit_credit
    }

    get day_due (){
        return this.props.day_due
    }

    get day_credit_closing (){
        return this.props.day_credit_closing
    }
}

