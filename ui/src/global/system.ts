import UserService from "@/services/user/UserService";
import {User} from "@/services/user/User";
import PostService from "@/services/post/PostService";

export const $system = {
    services: {
        user: new UserService(),
        post: new PostService()
    },
    setUser: (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
    },
    removeUser: (user: User) => {
        localStorage.removeItem("user");
    },
    getUser: (): User | null => {
        const user = localStorage.getItem("user");
        if (user == null) {
            return null;
        } else {
            return Object.setPrototypeOf(JSON.parse(user), User.prototype);
        }
    }
}
