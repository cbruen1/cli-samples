var app;
(function (app) {
    var convstarters;
    (function (convstarters) {
        var ConvStarterDetailController = (function () {
            function ConvStarterDetailController($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.tab = 0;
                //get the value from the route
                var id = $routeParams.id;
                var convStarterResource = dataAccessService.getConvResource();
                //the param name i.e. "id" must match the api parameter name
                convStarterResource.get({ id: id }, function (data) {
                    _this.convStarter = data;
                });
            }
            ConvStarterDetailController.prototype.setTab = function (value) {
                this.tab = value;
            };
            ConvStarterDetailController.$inject = ["$routeParams", "dataAccessService"];
            return ConvStarterDetailController;
        }());
        angular.module("app").controller("ConvStarterDetailCtrl", ConvStarterDetailController);
    })(convstarters = app.convstarters || (app.convstarters = {}));
})(app || (app = {}));
//# sourceMappingURL=ConvStarterDetailController.js.map