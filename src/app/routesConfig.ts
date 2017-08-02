import { IRouteResolverProvider } from "app/services/routeResolver.provider";

export class RoutesConfig {

    /** Function for initialize app routes */
    public static initialize(routeProvider: ng.route.IRouteProvider, routeResolverProvider: IRouteResolverProvider): void {

        // DEFAULT
        routeProvider.otherwise({ redirectTo: "/home" });

        // MAIN ROUTES
        routeProvider.when("/home", routeResolverProvider.resolve({ controllerAs: "vm", path: "home" }));
        routeProvider.when("/we", routeResolverProvider.resolve({ controllerAs: "vm", path: "we" }));
        routeProvider.when("/serenate", routeResolverProvider.resolve({ controllerAs: "vm", path: "serenate" }));
        routeProvider.when("/ceremony", routeResolverProvider.resolve({ controllerAs: "vm", path: "ceremony" }));
        routeProvider.when("/hotel", routeResolverProvider.resolve({ controllerAs: "vm", path: "hotel" }));
        routeProvider.when("/songs", routeResolverProvider.resolve({ controllerAs: "vm", path: "songs" }));
        routeProvider.when("/contact", routeResolverProvider.resolve({ controllerAs: "vm", path: "contact" }));
        routeProvider.when("/users", routeResolverProvider.resolve({ controllerAs: "vm", path: "users" }));

    }
}
