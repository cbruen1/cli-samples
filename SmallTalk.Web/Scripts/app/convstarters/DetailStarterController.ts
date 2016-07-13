module app.starters {
    interface IDetailStarterController {
        starter: app.domain.IStarter;
        tab: number;
        setTab(value: number): void;
    }

    interface IStarterParams extends ng.route.IRouteParamsService {
        /* must match the route param name*/
        id: number;
    }

    class DetailStarterController implements IDetailStarterController {
        starter: app.domain.IStarter;
        tab: number;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: IStarterParams, private dataAccessService: app.common.services.DataAccessService) {
            this.tab = 0;

            //get the value from the route
            var id = $routeParams.id;

            var starterResource = dataAccessService.getStarterResource();
            //the param name i.e. "id" must match the api parameter name
            starterResource.get({ id: id }, (data: app.domain.IStarter) => {
                this.starter = data;
            });
        }

        setTab(value: number): void {
            this.tab = value;
        }
    }

    angular.module("app").controller("DetailStarterCtrl", DetailStarterController);
}