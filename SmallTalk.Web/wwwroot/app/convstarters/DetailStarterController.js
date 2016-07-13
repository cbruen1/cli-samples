var app;
(function (app) {
    var starters;
    (function (starters) {
        var DetailStarterController = (function () {
            function DetailStarterController($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.tab = 0;
                //get the value from the route
                var id = $routeParams.id;
                var starterResource = dataAccessService.getStarterResource();
                //the param name i.e. "id" must match the api parameter name
                starterResource.get({ id: id }, function (data) {
                    _this.starter = data;
                });
            }
            DetailStarterController.prototype.setTab = function (value) {
                this.tab = value;
            };
            DetailStarterController.$inject = ["$routeParams", "dataAccessService"];
            return DetailStarterController;
        }());
        angular.module("app").controller("DetailStarterCtrl", DetailStarterController);
    })(starters = app.starters || (app.starters = {}));
})(app || (app = {}));
//# sourceMappingURL=DetailStarterController.js.map