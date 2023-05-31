import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, IsUUID } from "class-validator";

export interface CreditConfigDTO {
    user_id: string;
    day_credit_closing: number;
    day_due: number;
    description: string;
    limit_credit: number;
}

export class CreateCreditConfigDto {

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    user_id: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: 'Nu bank'})
    description: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 11})
    day_credit_closing: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 18})
    day_due: number


    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 2200})
    limit_credit: number
}

export class UpdateCreditConfigDto{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    user_id: string

    @IsString()
    @IsOptional()
    @ApiProperty({default: 'Nu bank'})
    description: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({default: 11})
    day_credit_closing: number

    @IsNumber()
    @IsOptional()
    @ApiProperty({default: 18})
    day_due: number


    @IsNumber()
    @IsOptional()
    @ApiProperty({default: 2200})
    limit_credit: number
}

export class GetCreditConfigDto {
    @IsNumberString()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;
}
