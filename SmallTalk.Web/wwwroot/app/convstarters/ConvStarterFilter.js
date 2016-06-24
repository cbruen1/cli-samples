var app;
(function (app) {
    var filters;
    (function (filters) {
        function ConvStarterSearch() {
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
        filters.ConvStarterSearch = ConvStarterSearch;
        angular.module("app").filter("convStarterSearch", ConvStarterSearch);
    })(filters = app.filters || (app.filters = {}));
})(app || (app = {}));
//# sourceMappingURL=ConvStarterFilter.js.map