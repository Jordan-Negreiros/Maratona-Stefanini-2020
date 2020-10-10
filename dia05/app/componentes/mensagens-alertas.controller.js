(function () {
    "use strict";

    angular
        .module("listaComprasApp")
        .controller("MensagensAlertasController", mensagensAlertasController);

    mensagensAlertasController.$inject = ["$rootScope"];

    function mensagensAlertasController($rootScope) {
        var vm = this;

        /* *************** INIT VARIÁVEIS ******************************** */

        /* *************** FUNÇÕES EXECUTADAS NA VIEW (HTML) ******************************** */
        vm.ctrl = {
            funcao: funcao,
        };

        function funcao(params) {
            console.log("Funcao do meu componente");
            console.log("listaMensagens", $rootScope.listaMensagens);
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
    }
})();
