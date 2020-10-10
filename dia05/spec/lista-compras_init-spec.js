(function () {

    // angular.module('ngRoute', []);
    angular.module('moduloExterno', []); // mock o módulo da aplicação

    angular.mock.listaComprasMock = function ($routeProvider) {
        module('listaComprasApp');
        module(function ($provide) {
            $provide.service('ListaComprasService', function () {
                return {
                    exemplo: function () { return {}; },
                };
            });
        });
    };

}());
