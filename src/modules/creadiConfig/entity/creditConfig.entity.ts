import { Model } from 'src/database/typeorm/model';
import { Credit } from 'src/modules/credit/entity/credit.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

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

    @OneToMany(()=>Credit, credit => credit.creditConfig)
    credit:Credit[]
}
