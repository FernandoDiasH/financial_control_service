export abstract class AbstractRepository<T>{
    abstract create(entitie: T):Promise<T>
    abstract save(entitie: T):Promise<T>
    abstract delete(userID:string, entititeId: string):Promise<boolean>
    abstract findById(entititeId: string ):Promise<T | null>
    abstract findManyByUserId(userId: string ):Promise<T[] | []>
}