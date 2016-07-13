module app.navigation {

    interface IMenuItem {
        href: string;
        name: string;        
    }

    interface INavigationController {
        menu: IMenuItem[];
        index: number;
        setIndex(value: number): void;
    }

    class NavigationController implements INavigationController {
        menu: IMenuItem[];
        index: number;

        constructor() {
            this.index = 0;
            this.menu = [
                { "href": "#/", "name": "Home" },
                { "href": "#/list", "name": "See more starters" },
                { "href": "#", "name": "Choose language" }
            ];
        }

        setIndex(value: number): void {
            this.index = value;
        }
    }

    angular.module("app").controller("NavigationCtrl", NavigationController);
}