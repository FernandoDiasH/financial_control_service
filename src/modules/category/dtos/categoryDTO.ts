import { TypeCategory } from '@app/entities/Category';
import { IsUUID, IsString, IsNotEmpty, IsEnum, IsInstance, } from 'class-validator'

export interface CreateCategoryPropsDTO {
    user_id: string;
    description: string;
    type: TypeCategory
}

enum typeEnum {
    Saida = "Saida",
    Entrada = "Entrada"
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
    @IsEnum(typeEnum)
    type: TypeCategory
}
