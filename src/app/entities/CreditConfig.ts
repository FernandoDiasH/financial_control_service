import { randomUUID } from "crypto"

interface CreditConfigProps{
    id?: string
    user_id: string
    description: string
    limit_credit: number
    day_due: string
    day_credit_closing: string
}

export class CreditConfig{
    private _id?:string
    private _user_id:string
    private _description:string
    private _limit_credit:number
    private _day_due:string
    private _day_credit_closing:string

    constructor(props:CreditConfigProps){

        this._id = props.id
        this._user_id = props.user_id
        this._description = props.description
        this._limit_credit = props.limit_credit
        this._day_due = props.day_due
        this._day_credit_closing = props.day_credit_closing

        if(!props.id){
            this._id = randomUUID()
        }
    }

    get id (){
        return this._id        
    }

    get user_id (){
        return this._user_id
    }

    get description (){
        return this._description
    }

    get limit_credit (){
        return this._limit_credit
    }

    get day_due (){
        return this._day_due
    }

    get day_credit_closing (){
        return this._day_credit_closing
    }
}
