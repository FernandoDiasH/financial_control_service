import { TypeCategory } from "@prisma/client";
import { randomUUID } from "crypto";
import { Model } from "src/database/typeorm/model";
import { Credit } from "src/modules/credit/entity/credit.entity";
import { Debit } from "src/modules/debit/entity/debit.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Category"})
export class Category extends Model {
    
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column({name:"type_category"})
    type: TypeCategory

    @OneToMany(()=>Credit, credit =>credit.category)
    credits:Credit[]

    @OneToMany(()=>Debit, debit => debit.category)
    debits:Debit[]
}