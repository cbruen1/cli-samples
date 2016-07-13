module app.starters { 
    interface IListStarterController {
        title: string;
        starters: app.domain.IStarter[];
    }

    class ListStarterController implements IListStarterController {
        title: string;
        starters: app.domain.IStarter[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.services.DataAccessService) {
            this.title = "SmallTalk";
            this.starters = [];
            const starterResource = dataAccessService.getStarterResource();

            starterResource.query((data: app.domain.IStarter[]) => {
                this.starters = data;
            });
        }
    }

    angular.module("app").controller("ListStarterCtrl", ListStarterController);
}