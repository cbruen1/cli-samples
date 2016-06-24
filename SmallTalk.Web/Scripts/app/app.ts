module app {
    var main = angular.module("app", ["ngRoute", "common.services"]);
    //main.run(Runner);

    //function Runner(): void {
    //    console.log("SmallTalk - we are up an running..!");
    //}
    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when("/convStarterList", {
                templateUrl: "/templates/convstarterlist.html",
                controller: "ConvStarterListCtrl as vm"
            })
            .when("/convStarterDetails/:id", {
                templateUrl: "/templates/convstarterdetails.html",
                controller: "ConvStarterDetailCtrl as vm"
            })
            .otherwise("/convStarterList");
    }
}