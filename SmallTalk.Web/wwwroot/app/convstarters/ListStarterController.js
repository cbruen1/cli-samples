var app;
(function (app) {
    var starters;
    (function (starters) {
        var ListStarterController = (function () {
            function ListStarterController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "SmallTalk";
                this.starters = [];
                var starterResource = dataAccessService.getStarterResource();
                starterResource.query(function (data) {
                    _this.starters = data;
                });
            }
            ListStarterController.$inject = ["dataAccessService"];
            return ListStarterController;
        }());
        angular.module("app").controller("ListStarterCtrl", ListStarterController);
    })(starters = app.starters || (app.starters = {}));
})(app || (app = {}));
//# sourceMappingURL=ListStarterController.js.map