var app;
(function (app) {
    var main = angular.module("app", ["ngRoute", "common.services"]);
    //main.run(Runner);
    //function Runner(): void {
    //    console.log("SmallTalk - we are up an running..!");
    //}
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/templates/random.html",
            controller: "RandomStarterCtrl as vm"
        })
            .when("/list", {
            templateUrl: "/templates/list.html",
            controller: "ListStarterCtrl as vm"
        })
            .when("/details/:id", {
            templateUrl: "/templates/details.html",
            controller: "DetailStarterCtrl as vm"
        })
            .otherwise({ redirectTo: "/index" });
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map