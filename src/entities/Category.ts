interface CategoryProps{
    id:number
    user_id: number
    description:string
}
export class Category {
    public props: CategoryProps
   
    constructor(props:CategoryProps){

        if(props.id < 0){
            throw new Error("O id nao pode ser um numero negativo")
        }
        
        this.props = props

    }
}

