import { randomUUID } from 'node:crypto' 

export interface CategoryProps{
    id?: string
    user_id: string
    description: string
}

export class Category {
    
    private id?:string
    private user_id :string
    private description: string

    constructor(props:CategoryProps){
        const { id, user_id } = props
        
        if(typeof id === 'number' && typeof user_id === 'number'){
            throw new Error('Dados invalidos')
        }

        if(!user_id){
            throw new Error('Dados invalidos')
        }
        
        this.id = props.id
        this.user_id = props.user_id
        this.description = props.description


        if(!id){
            this.id = randomUUID()
        }
    }

    get _id (){
        return this.id
    }
    
    get _user_id (){
        return this.user_id
    }

    get _descripiton (){
        return this.description
    }
}

