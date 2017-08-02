import { angularApp } from "app/main";

class CeremonyController {

    // services
    private _scope: ng.IScope;

    /** Constructor por defecto de la clase */
    constructor($scope: ng.IScope) {
        this._scope = $scope;
    }
}

// establecer variables a inyectar en el controlador
// NOTA: (Deben seguir el mismo orden que el constructor del controlador)
CeremonyController.$inject = ["$scope"];

// registrar el controlador en la aplicacion
angularApp.registerController("ceremonyController", CeremonyController);
