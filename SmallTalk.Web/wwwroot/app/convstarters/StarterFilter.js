var app;
(function (app) {
    var filters;
    (function (filters) {
        function StarterSearch() {
            return function (items, search) {
                var filtered = [];
                if (!search) {
                    return items;
                }
                angular.forEach(items, function (item) {
                    if (angular.lowercase(item.Text).indexOf(angular.lowercase(search)) != -1) {
                        filtered.push(item);
                    }
                });
                return filtered;
            };
        }
        filters.StarterSearch = StarterSearch;
        angular.module("app").filter("starterSearch", StarterSearch);
    })(filters = app.filters || (app.filters = {}));
})(app || (app = {}));
//# sourceMappingURL=StarterFilter.js.map