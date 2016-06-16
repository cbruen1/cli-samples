module app.domain {
    export interface IConvStarter {
        Id: number;
        Text: string;
        Language: string;
    }

    export class ConvStarter implements IConvStarter {
        constructor(
            public Id: number,
            public Text: string,
            public Language: string) {

        }
    }
}