import { Model } from 'src/database/typeorm/model';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name:"CreditConfig"})
export class CreditConfig extends Model {
    
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    limit_credit: number;

    @Column()
    day_due: number;

    @Column()
    day_credit_closing: number;
}
