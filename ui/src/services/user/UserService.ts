import Service from "@/services/Service";
import {User} from "@/services/user/User";

export default class extends Service<User> {


    constructor() {
        super("users");
    }

    protected updateEntity(storedEntity: User, entity: User): void {
        storedEntity.nickname = entity.nickname;
        storedEntity.firstName = entity.firstName;
        storedEntity.lastName = entity.lastName;
        storedEntity.password = entity.password;
    }

    public getByNickname(nickname: string): User {
        return this.getAll().filter(user => user.nickname === nickname)[0];
    }


}