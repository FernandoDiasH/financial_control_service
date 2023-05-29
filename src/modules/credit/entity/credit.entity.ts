import { Model } from 'src/database/typeorm/model';
import { Category } from 'src/modules/category/entity/category.entity';
import { CreditConfig } from 'src/modules/creadiConfig/entity/creditConfig.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name:"Credit"})
export class Credit extends Model {
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    id_category: number;

    @Column()
    id_credit_config: number;

    @Column()
    description: string;

    @Column()
    installment_value: number;

    @Column()
    dt_due: Date;

    @Column()
    credit_status?: Date | null;

    @ManyToOne(()=> Category, category => category.credits)
    @JoinColumn({name:"category_id"})
    category:Category

    @ManyToOne(() => CreditConfig, creditConfig => creditConfig.credit)
    @JoinColumn({name:"credit_config_id"})
    creditConfig:CreditConfig
}

