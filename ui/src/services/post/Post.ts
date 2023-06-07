import Entity from "@/services/Entity";

export class Post extends Entity {

    public userId: number;

    public text: string;

    public image: string | null;

    public likes: number;

    public saves: number;

    public dateString: string | null;


    constructor(userId: number, text: string) {
        super(0);
        this.userId = userId;
        this.text = text;
        this.image = null;
        this.likes = 0;
        this.saves = 0;
        this.dateString = new Date().toISOString();
    }

    public getDateString(): string {
        const date = new Date(this.dateString || "");
        const formatedDay = date.getDay() >= 10 ? date.getDate() : `0${date.getDate()}`;
        const formatedMonth = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`;
        const formatedHour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
        const formatedMinutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

        const today = new Date();
        if (today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()) {
            if (today.getDate() === date.getDate()) {
                return `Hoje às ${formatedHour}:${formatedMinutes}`
            } else if ((today.getDate() - date.getDate()) === 1) {
                return `Ontem às ${formatedHour}:${formatedMinutes}`
            } else {
                return `${formatedDay}/${formatedMonth} às ${formatedHour}:${formatedMinutes}`
            }
        } else {
            return `${formatedDay}/${formatedMonth}/${formatedHour} às ${formatedHour}:${formatedMinutes}`
        }
    }
}