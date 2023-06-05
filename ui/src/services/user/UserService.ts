import Service from "@/services/Service";
import {User} from "@/services/user/User";
import {$system} from "@/global/system";

export default class extends Service<User> {


    constructor() {
        super("users");
    }

    protected updateEntity(storedEntity: User, entity: User): void {
        storedEntity.nickname = entity.nickname;
        storedEntity.name = entity.name;
        storedEntity.password = entity.password;
        storedEntity.savedPostIds = entity.savedPostIds;
        storedEntity.likedPostIds = entity.likedPostIds;
    }

    protected assign(entity: User): void {
        Object.setPrototypeOf(entity, User.prototype);
    }


    public getByNickname(nickname: string): User {
        return super.getAll().filter(user => user.nickname === nickname)[0];
    }

    public getAllUnlessThisUser(thisUser: User): Array<User> {
        return super.getAll().filter(user => user.id !== thisUser.id);
    }


    public save(entity: User) {
        if (entity.id == $system.getUser()?.id) {
            $system.setUser(entity);
        }
        super.save(entity);
    }
}