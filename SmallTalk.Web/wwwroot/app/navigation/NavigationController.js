var app;
(function (app) {
    var navigation;
    (function (navigation) {
        var NavigationController = (function () {
            function NavigationController() {
                this.index = 0;
                this.menu = [
                    { "href": "#/", "name": "Home" },
                    { "href": "#/list", "name": "See more starters" },
                    { "href": "#", "name": "Choose language" }
                ];
            }
            NavigationController.prototype.setIndex = function (value) {
                this.index = value;
            };
            return NavigationController;
        }());
        angular.module("app").controller("NavigationCtrl", NavigationController);
    })(navigation = app.navigation || (app.navigation = {}));
})(app || (app = {}));
//# sourceMappingURL=NavigationController.js.map