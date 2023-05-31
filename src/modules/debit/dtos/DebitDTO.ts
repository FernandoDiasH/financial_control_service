import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, IsUUID } from "class-validator";

export interface DebitDTO {
    user_id: string;
    description: string;
    value: number;
    category_id: string;
    dt_purchase: string;
    debit_type: string;
}

export interface GetDebitsPropsDto {
    user_id: string;
    start_dt?: Date | null;
    end_dt?: Date | null;
}

export class GetDebitDto {

    @IsNumberString()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;
}

export class CreteDebitDto {
    
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    id_user: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id_category: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: 'luz'})
    description: string

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({default: '2023-05-31'})
    dt_purchase: string


    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 120}) 
    value: number
}

export class UpdateDebitDto{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id:number

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    id_user: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({default: 1}) 
    id_category: number

    @IsString()
    @IsOptional()
    @ApiProperty({default: 'luz'})
    description: string

    @IsDateString()
    @IsOptional()
    @ApiProperty({default: '2023-05-31'})
    dt_purchase: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({default: 120}) 
    value: number
}
