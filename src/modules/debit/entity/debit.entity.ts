import { Model } from 'src/database/typeorm/model';
import { Category } from 'src/modules/category/entity/category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"Debit"})
export class Debit extends Model {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_category: number;
    
    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    dt_purchase: Date;

    @ManyToOne( () => Category, category => category.debits)
    @JoinColumn({name:"id_category"})
    category:Category
}
