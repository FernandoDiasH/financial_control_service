import { BaseEntity, Column } from "typeorm";


export class Model extends BaseEntity {
     
    @Column({name:"user_id"})
    id_user:string
}