import { TypeCategory } from "@prisma/client";
import { randomUUID } from "crypto";
import { Model } from "src/database/typeorm/model";
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Category"})
export class Category extends Model {
    
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column({name:"type_category"})
    type: TypeCategory

}