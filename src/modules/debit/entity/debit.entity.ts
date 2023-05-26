import { Model } from 'src/database/typeorm/model';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name:"Debit"})
export class Debit extends Model {
    @PrimaryColumn()
    id: string;

    @Column()
    category_id: string;
    
    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    dt_purchase: Date;
}
