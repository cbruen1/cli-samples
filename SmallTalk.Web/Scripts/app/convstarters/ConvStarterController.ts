module app.convstarters { 
    interface IConvStarterListController {
        title: string;
        convstarters: app.domain.IConvStarter[];
    }

    class ConvStarterListController implements IConvStarterListController {
        title: string;
        convstarters: app.domain.IConvStarter[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.services.DataAccessService) {
            this.title = "SmallTalk";
            this.convstarters = [];
            const convStarterResource = dataAccessService.getConvResource();
            convStarterResource.query((data: app.domain.IConvStarter[]) => {
                this.convstarters = data;
            });
        }
    }

    angular.module("app").controller("ConvStarterListCtrl", ConvStarterListController);
}