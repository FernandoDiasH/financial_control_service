import {DeepPartial, Repository } from "typeorm";
import { Model } from "./model";

export abstract class BaseRepository<T extends Model>{

    constructor( 
        protected repository:Repository<T>)
    {}

    createEntity(entity: DeepPartial<T>){
        return this.repository.create(entity)
    }

    saveEntity(entity: T[]){
        return this.repository.save(entity)
    }

    findManyByUserId(userId:string) {
        return this.repository
            .createQueryBuilder()
            .where("user_id = :userId", {userId:userId})
            .getMany()
    }

    findOneByUserId(id:string, userId:string){
        return this.repository
            .createQueryBuilder()
            .where('id = :id', {id: id})
            .andWhere("user_id = :userId", { userId: userId })
            .getOne()
    }
}

