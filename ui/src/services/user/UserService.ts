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
        storedEntity.followIds = entity.followIds;
        storedEntity.bibliography = entity.bibliography;
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

    public getAllByNameOrNicknameUnlessThisUser(search: string, thisUser: User): Array<User> {
        if (search.length === 0) {
            return this.getAllUnlessThisUser(thisUser);
        }
        search = search.toLowerCase();
        return this.getAllUnlessThisUser(thisUser)
            .filter(user => user.name?.toLowerCase().startsWith(search) || user.nickname?.toLowerCase().startsWith(search));
    }

    public doFollow(user: User, followed: User): boolean {
        if (!user.followIds.includes(followed.id)) {
            user.followIds.push(followed.id);
            super.save(user);
            $system.setUser(user);
            return true;
        } else {
            user.followIds.splice(user.followIds.indexOf(followed.id), 1);
            super.save(user);
            $system.setUser(user);
            return false;
        }
    }

    public save(entity: User) {
        if (entity.id == $system.getUser()?.id) {
            $system.setUser(entity);
        }
        super.save(entity);
    }
}