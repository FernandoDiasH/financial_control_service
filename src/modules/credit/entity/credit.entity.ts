import { Model } from 'src/database/typeorm/model';
import { Column, PrimaryColumn } from 'typeorm';


export class Credit extends Model {
    
    @PrimaryColumn()
    id:string

    @Column()
    category_id: string;

    @Column()
    description: string;

    @Column()
    installment_value: number;

    @Column()
    dt_due: Date;

    @Column()
    credit_status?: Date | null;

    @Column()
    credit_config_id: string;
}

