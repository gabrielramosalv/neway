import UserService from "@/services/user/UserService";
import {User} from "@/services/user/User";

export const $system = {
    services: {
        user: new UserService()
    },
    setUser: (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
    },
    removeUser: (user: User) => {
        localStorage.removeItem("user");
    },
    getUser: (): User => {
        return JSON.parse(localStorage.getItem("user") || "{}");
    }
}
