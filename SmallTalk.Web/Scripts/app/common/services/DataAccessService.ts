module app.common.services {
    interface IStarterResource extends ng.resource.IResource<app.domain.IStarter> { } 

    interface IDataAccessService {
        getStarterResource(): ng.resource.IResourceClass<IStarterResource>;
    }

    export class DataAccessService implements IDataAccessService {
        // minification protection
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) { }

        getStarterResource(): ng.resource.IResourceClass<IStarterResource> {
            return this.$resource("http://localhost:1112/api/convstarter/:id");
        }
    }

    angular.module("common.services").service("dataAccessService", DataAccessService);
}