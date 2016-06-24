module app.common.services {
    interface IConvStarterResource extends ng.resource.IResource<app.domain.IConvStarter> { } 

    interface IDataAccessService {
        getConvResource(): ng.resource.IResourceClass<IConvStarterResource>;
    }

    export class DataAccessService implements IDataAccessService {
        // minification protection
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) { }

        getConvResource(): ng.resource.IResourceClass<IConvStarterResource> {
            return this.$resource("http://localhost:1112/api/convstarter/:id");
        }
    }

    angular.module("common.services").service("dataAccessService", DataAccessService);
}