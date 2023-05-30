import {DeepPartial, Repository } from "typeorm";
import { Model } from "./model";

export abstract class BaseRepository<T extends Model>{

    constructor( 
        public repository:Repository<T>)
    {}

    createEntity(entity: DeepPartial<T>){
        return this.repository.create(entity)
    }

    saveEntity(entity: T[]){
        return this.repository.save(entity)
    }

    findManyByUserId(id_user:string) {
        return this.repository
            .createQueryBuilder()
            .where("id_user = :id_user", {id_user:id_user})
            .getMany()
    }

    findOneByUserId(id:number, id_user:string){
        return this.repository
            .createQueryBuilder()
            .where('id = :id', {id: id})
            .andWhere("id_user = :id_user", { id_user: id_user })
            .getOne()
    }
}

