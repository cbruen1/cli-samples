module app.convstarters {
    interface IConvStarterDetailController {
        convStarter: app.domain.IConvStarter;
        tab: number;
        setTab(value: number): void;
    }

    interface IConvStarterParams extends ng.route.IRouteParamsService {
        /* must match the route param name*/
        id: number;
    }

    class ConvStarterDetailController implements IConvStarterDetailController {
        convStarter: app.domain.IConvStarter;
        tab: number;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: IConvStarterParams, private dataAccessService: app.common.services.DataAccessService) {
            this.tab = 0;

            //get the value from the route
            var id = $routeParams.id;

            var convStarterResource = dataAccessService.getConvResource();
            //the param name i.e. "id" must match the api parameter name
            convStarterResource.get({ id: id }, (data: app.domain.IConvStarter) => {
                this.convStarter = data;
            });
        }

        setTab(value: number): void {
            this.tab = value;
        }
    }

    angular.module("app").controller("ConvStarterDetailCtrl", ConvStarterDetailController);
}