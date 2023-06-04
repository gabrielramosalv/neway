import Entity from "@/services/Entity";

export default abstract class<T extends Entity> {

    private readonly _key: string;

    protected constructor(key: string) {
        this._key = key;
    }

    private getEntities(): Array<T> {
        if (localStorage.getItem(this._key) == null) {
            localStorage.setItem(this._key, JSON.stringify([]));
            return [];
        }
        return JSON.parse(localStorage.getItem(this._key) || "[]");
    }

    private saveEntities(entities: Array<T>): void {
        localStorage.setItem(this._key, JSON.stringify(entities));
    }

    public save(entity: T) {
        const entities = this.getEntities();
        const storedEntity = this.getOne(entity.id);
        if (storedEntity != null) {
            this.updateEntity(storedEntity, entity);
        } else {
            entity.id = entities.length + 1;
            entities.push(entity);
        }
        this.saveEntities(entities);
    }

    public getOne(id: number): T | null {
        const entities = this.getEntities();
        const entityOptional = entities.filter((storedEntity) => storedEntity.id == id);
        if (entityOptional.length != 0) {
            return entityOptional[0];
        }
        return null;
    }

    public getAll(): Array<T> {
        return this.getEntities();
    }

    public delete(entity: T): void {
        this.saveEntities(this.getEntities().filter(storedEntity => storedEntity.id != entity.id));
    }

    protected abstract updateEntity(storedEntity: T, entity: T): void;
}
