import {IsUUID, IsString, IsNotEmpty} from 'class-validator'

export interface CreateCategoryDTO {
    user_id: string;
    description: string;
}

export class CreateCategoryDTO {
    
    @IsNotEmpty()
    @IsUUID()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    description: string;

}
