(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaComprasApp', []);

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('listaComprasController', listaComprasController);

    listaComprasController.$inject = [];

    function listaComprasController() {
        var vm = this;

        /* INIT VARIÁVEIS */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        /* FUNÇÕES EXECUTADAS NA VIEW (HTML) */

        /* FUNÇÕES INTERNAS */
    }
    
})(angular);