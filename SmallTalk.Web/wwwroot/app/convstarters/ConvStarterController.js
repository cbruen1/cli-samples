var app;
(function (app) {
    var convstarters;
    (function (convstarters) {
        var ConvStarterController = (function () {
            function ConvStarterController() {
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
            return ConvStarterController;
        }());
        angular.module("app").controller("ConvStarterCtrl", ConvStarterController);
    })(convstarters = app.convstarters || (app.convstarters = {}));
})(app || (app = {}));
//# sourceMappingURL=ConvStarterController.js.map