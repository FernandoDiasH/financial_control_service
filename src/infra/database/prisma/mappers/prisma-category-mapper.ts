import { Category } from "../../../../app/entities/Category";

export class PrismaCategoryMapper{
    
    static toPrisma(category:Category){
        return {
                id:category._id,
                user_id:category._user_id,
                description:category._descripiton
        }
    }

}