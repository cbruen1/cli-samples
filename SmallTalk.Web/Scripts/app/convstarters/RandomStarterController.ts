module app.random {
    interface IRandomStarterController {
        title: string;
        starters: app.domain.IStarter[];
    }

    class RandomStarterController implements IRandomStarterController {
        title: string;
        starters: app.domain.IStarter[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.services.DataAccessService) {
            this.title = "Random selection";
            this.starters = [];
            var rsrc = dataAccessService.getStarterResource();

            rsrc.query((data: app.domain.IStarter[]) => {
                this.starters = data;
            });
        };
    };

    angular.module("app").controller("RandomStarterCtrl", RandomStarterController);
};