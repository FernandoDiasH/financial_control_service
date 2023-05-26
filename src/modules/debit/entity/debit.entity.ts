import { Model } from 'src/database/typeorm/model';
import { Category } from 'src/modules/category/entity/category.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

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

    @ManyToOne( () => Category, category => category.debits)
    category:Category
}
