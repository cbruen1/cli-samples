module app.convstarters { 
    interface IConvStarterController {
        title: string;
        convstarters: app.domain.IConvStarter[];
    }

    class ConvStarterController implements IConvStarterController {
        title: string;
        convstarters: app.domain.IConvStarter[];

        constructor() {
            this.title = "SmallTalk";
            this.convstarters = [
                {
                    "Id": 1,
                    "Text": "What time do you call this?",
                    "Language": "English"
                },
                {
                    "Id": 2,
                    "Text": "Was machst du?",
                    "Language": "German"
                },
                {
                    "Id": 3,
                    "Text": "Ca va?",
                    "Language": "French"
                }];

            var convstarter = new app.domain.ConvStarter(4, "Como estas?", "Spanish");
            this.convstarters.push(convstarter);
        }
    }

    angular.module("app").controller("ConvStarterCtrl", ConvStarterController);
}