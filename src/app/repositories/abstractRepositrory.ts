export abstract class AbstractRepository<T>{
    abstract create(entity: T): Promise<T>
    abstract save(entity: T): Promise<T>
    abstract delete(userID: string, entityId: string): Promise<boolean>
    abstract findById(entityId: number): Promise<T | null>
    abstract findManyByUserId(userId: string): Promise<T[]>
}