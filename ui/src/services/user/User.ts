import Entity from "@/services/Entity";
import ServiceException from "@/services/ServiceException";
import * as text from "@/global/util/text";

export class User extends Entity {


    public nickname: string | null;

    public name: string | null;

    public password: string | null;

    public bibliography: string | null;

    private photo: string | null;

    public likedPostIds: Array<number>;

    public savedPostIds: Array<number>;

    public followIds: Array<number>;

    constructor(nickname: string | null = null, firstName: string | null = null, password: string | null = null) {
        super(0);
        this.nickname = nickname;
        this.name = firstName;
        this.password = password;
        this.bibliography = "";
        this.photo = null;
        this.likedPostIds = [];
        this.savedPostIds = [];
        this.followIds = [];
    }

    public validate(): void {
        if (this.nickname == null || this.nickname.length == 0) {
            throw new ServiceException("Apelido do usuário não preenchido");
        }
        if (this.name == null || this.name.length == 0) {
            throw new ServiceException("Primeiro nome do usuário não preenchido");
        }
        if (this.password == null || this.password.length == 0) {
            throw new ServiceException("Senha do usuário não preenchida");
        }
    }

    public static nicknameFormatter(nickname: string): string {
        return nickname.replaceAll(/[^a-zA-Z0-9_]+/g, "").toLowerCase();
    }

    public static nameFormatter(name: string): string {
        return text.capitalize(name);
    }
}