var app;
(function (app) {
    var convstarters;
    (function (convstarters) {
        var ConvStarterListController = (function () {
            function ConvStarterListController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "SmallTalk";
                this.convstarters = [];
                var convStarterResource = dataAccessService.getConvResource();
                convStarterResource.query(function (data) {
                    _this.convstarters = data;
                });
            }
            ConvStarterListController.$inject = ["dataAccessService"];
            return ConvStarterListController;
        }());
        angular.module("app").controller("ConvStarterListCtrl", ConvStarterListController);
    })(convstarters = app.convstarters || (app.convstarters = {}));
})(app || (app = {}));
//# sourceMappingURL=ConvStarterController.js.map