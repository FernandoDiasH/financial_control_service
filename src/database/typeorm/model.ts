import { BaseEntity, Column } from "typeorm";


export class Model extends BaseEntity {
     
    @Column({name:"id_user"})
    id_user:string
}