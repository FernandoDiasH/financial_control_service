import { TypeCategory } from '@app/entities/Category';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsNotEmpty, IsEnum, IsInstance, IsOptional, IsNumber, IsNumberString, } from 'class-validator'

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
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    id_user: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: 'Conta fixa'})
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(typeEnum)
    @ApiProperty({default: "Entrada | Saida"})
    type: TypeCategory
}


export class UpdateCategoryDto{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    id_user: string;

    @IsString()
    @IsOptional()
    @ApiProperty({default: 'Conta fixa'})
    description: string;

    @IsString()
    @IsOptional()
    @IsEnum(typeEnum)
    @ApiProperty({default: "Entrada | Saida"})
    type: TypeCategory
}

export class GetCategoryDto {
    
    @IsNumberString()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;
}
 