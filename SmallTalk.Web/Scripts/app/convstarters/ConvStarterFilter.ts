module app.filters {
    export function ConvStarterSearch() {
        return function (items: app.domain.IConvStarter[], search: string): app.domain.IConvStarter[] {
            var filtered = [];
            if (!search) { return items; }
            angular.forEach(items, function (item) {

                if (angular.lowercase(item.Text).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(item);
                }

            });
            return filtered;
        }
    }
    angular.module("app").filter("convStarterSearch", ConvStarterSearch);
}