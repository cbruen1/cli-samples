module app.filters {
    export function StarterSearch() {
        return function (items: app.domain.IStarter[], search: string): app.domain.IStarter[] {
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
    angular.module("app").filter("starterSearch", StarterSearch);
}