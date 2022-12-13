interface ICategory{
    id?:number
    user_id:number
    description:string
}

export class Category {

    public id?:number
    public user_id: number
    public description:string

    constructor({ id, user_id, description }:ICategory){
        this.id = id
        this.user_id = user_id
        this.description = description
    }
}

