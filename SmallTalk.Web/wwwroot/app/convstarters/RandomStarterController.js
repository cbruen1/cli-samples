var app;
(function (app) {
    var random;
    (function (random) {
        var RandomStarterController = (function () {
            function RandomStarterController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Random selection";
                this.starters = [];
                var rsrc = dataAccessService.getStarterResource();
                rsrc.query(function (data) {
                    _this.starters = data;
                });
            }
            ;
            RandomStarterController.$inject = ["dataAccessService"];
            return RandomStarterController;
        }());
        ;
        angular.module("app").controller("RandomStarterCtrl", RandomStarterController);
    })(random = app.random || (app.random = {}));
})(app || (app = {}));
;
//# sourceMappingURL=RandomStarterController.js.map