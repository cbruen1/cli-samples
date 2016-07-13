module app.domain {
    export interface IStarter {
        Id: number;
        Text: string;
        Language: string;
    }

    export class Starter implements IStarter {
        constructor(
            public Id: number,
            public Text: string,
            public Language: string) {

        }
    }
}