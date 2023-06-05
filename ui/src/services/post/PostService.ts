import Service from "@/services/Service";
import {Post} from "@/services/post/Post";
import {User} from "@/services/user/User";
import {$system} from "@/global/system";

export default class extends Service<Post> {


    constructor() {
        super("posts");
    }

    protected updateEntity(storedEntity: Post, entity: Post): void {
        storedEntity.likes = entity.likes;
        storedEntity.saves = entity.saves;
    }

    protected assign(entity: Post): void {
        Object.setPrototypeOf(entity, Post.prototype);
    }

    public getByUser(user: User): Array<Post> {
        return super.getAll().filter(post => post.userId == user.id);
    }

    public doLike(post: Post, user: User): boolean {
        if (!user.likedPostIds.includes(post.id)) {
            post.likes += 1;
            this.save(post);
            user.likedPostIds.push(post.id);
            $system.services.user.save(user);
            return true;
        } else {
            post.likes -= 1;
            this.save(post);
            user.likedPostIds.splice(user.likedPostIds.indexOf(post.id), 1);
            $system.services.user.save(user);
            return false;
        }
    }

}