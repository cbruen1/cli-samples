var app;
(function (app) {
    var main = angular.module('app', []);
    main.run(Runner);
    function Runner() {
        console.log("SmallTalk - we are up an running..!");
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map