import { Model } from 'src/database/typeorm/model';
import { Category } from 'src/modules/category/entity/category.entity';
import { CreditConfig } from 'src/modules/creadiConfig/entity/creditConfig.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';


@Entity({name:"Credit"})
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

    @ManyToOne(()=> Category, category => category.credits)
    category:Category

    @ManyToOne(() => CreditConfig, creditConfig => creditConfig.credit)
    @JoinColumn({name:"credit_config_id"})
    creditConfig:CreditConfig
}

