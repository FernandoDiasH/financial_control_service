import { Category } from "../../../app/entities/Category";

export class CategoryViewModel{
    static toHTTP(category:Category){
        return {
            id:category._id,
            user_id: category._user_id,
            description: category._descripiton
        }
    }
}