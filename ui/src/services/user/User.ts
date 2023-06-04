import Entity from "@/services/Entity";
import ServiceException from "@/services/ServiceException";
import * as text from "@/utils/text";

export class User extends Entity {

    public nickname;

    public firstName;

    public lastName;

    public password;

    constructor(nickname: string, firstName: string, lastName: string, password: string) {
        super(0);
        this.nickname = nickname;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    public validate(): void {
        if (this.nickname.length == 0) {
            throw new ServiceException("Apelido do usuário não preenchido");
        }
        if (this.firstName.length == 0) {
            throw new ServiceException("Primeiro nome do usuário não preenchido");
        }
        if (this.password.length == 0) {
            throw new ServiceException("Senha do usuário não preenchida");
        }
    }

    public static nicknameFormatter(nickname: string): string {
        return nickname.replaceAll(/[^a-zA-Z0-9_]+/g, "").toLowerCase();
    }

    public static nameFormatter(name: string): string {
        return text.capitalize(text.justOneWord(name));
    }
}