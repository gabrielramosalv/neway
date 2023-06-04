import UserService from "@/services/user/UserService";

export class ServiceManager {

    private static _instance: ServiceManager;

    public user: UserService;

    private constructor() {
        this.user = new UserService();
    }

    public static getInstance(): ServiceManager {
        if (this._instance == null) {
            this._instance = new ServiceManager();
        }
        return this._instance;
    }

}