export class Message {

    private readonly _message: string;
    private readonly _type: MessageType;

    constructor(message: string, type: MessageType) {
        this._message = message;
        this._type = type;
    }

    get message(): string {
        return this._message;
    }

    get type(): MessageType {
        return this._type;
    }
}

export enum MessageType {
    SUCCESS,
    WARNING,
    ERROR,
    NORMAL
}