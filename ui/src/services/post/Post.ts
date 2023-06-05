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
}