module app {
    var main = angular.module('app', []);
    main.run(Runner);

    function Runner(): void {
        console.log("SmallTalk - we are up an running..!");
    }
}