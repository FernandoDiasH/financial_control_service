import { TypeCategory } from '@app/entities/Category';
import {IsUUID, IsString, IsNotEmpty, IsEnum} from 'class-validator'

export interface CreateCategoryDTO {
    user_id: string;
    description: string;
    type:TypeCategory
}

export class CreateCategoryDTO {
    
    @IsNotEmpty()
    @IsUUID()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    type:TypeCategory
}
