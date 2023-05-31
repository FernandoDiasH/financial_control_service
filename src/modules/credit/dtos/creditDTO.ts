import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, IsUUID } from "class-validator";

export interface CreateCreditPropsDTO {
    user_id: string;
    credit_config_id: string;
    category_id: string;
    description: string;
    data_compra: string;
    parcelas: number;
    value: number;
}


export class CreateCreditDto {

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    id_user: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id_credit_config: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id_category: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: 'Conta fixa'})
    description: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({default: '2023-05-31'})
    purchaseDate: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 6}) 
    creditInstallments: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 350}) 
    totalValue: number;
}

export class UpdateCreditConfigDto{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({default:'85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0'})
    id_user: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id_credit_config: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id_category: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: 'luz'})
    description: string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({default: '2023-05-31'})
    dt_due: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default: 120}) 
    installments_value: number;

}

export class GetCreditDto {
    
    @IsNumberString()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id: number;
}
export class PayCreditDto {
    @IsNumberString()
    @IsNotEmpty()
    @ApiProperty({default: 1}) 
    id:number
}


export class FindCreditsDto {
    user_id: string;
    start_dt?: string;
    end_dt?: string;
}

export interface FindCreditsPropsDTO {
    user_id: string;
    start_dt?: Date;
    end_dt?: Date;
}

