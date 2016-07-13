var app;
(function (app) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var DataAccessService = (function () {
                function DataAccessService($resource) {
                    this.$resource = $resource;
                }
                DataAccessService.prototype.getStarterResource = function () {
                    return this.$resource("http://localhost:1112/api/convstarter/:id");
                };
                // minification protection
                DataAccessService.$inject = ["$resource"];
                return DataAccessService;
            }());
            services.DataAccessService = DataAccessService;
            angular.module("common.services").service("dataAccessService", DataAccessService);
        })(services = common.services || (common.services = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=DataAccessService.js.map