(function () {
    "use strict";

    // CONTROLLER
    angular
        .module("listaComprasApp")
        .controller("HeaderController", headerController);

    headerController.$inject = ["ListaComprasService", "helperFactory"];

    function headerController(service, helper) {
        var vm = this;

        /* INIT VARIÁVEIS */

        /* FUNÇÕES EXECUTADAS NA VIEW (HTML) */
        //vm.ativo = false;
        //vm.service = serviceF;
        vm.go = helper.go;
        vm.logout = logout;
        vm.iniciar = iniciar;

        /*  function go(_path) {
            var path = _path ? _path : $location.path();
            if (path === '/login' || path === '/register') {
                $location.path(path);
            } else {
                isLoggedIn(path);
            }
            setPage(path);
        } */

        /*
        function serviceF(_path) {
            return service.exemplo()
            .then(function (response) {
                console.log('veio da service' ,response)
            })
        }
        */
        // Podemos criar uma função para ser executada assim que a controller for iniciada
        // então colocamos dentro dessa função o 'vm.go', para que assim que acessar
        // a aplicação a partir de qualquer rota, será usuário o acesso e setado a página na qual estiver
        function iniciar() {
            vm.go();
        }

        function logout() {
            helper.setRootScope("userLogged", null);
            helper.path("/login");
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        /* function isLoggedIn(_path) {
            if (helper.getRootScope("userLogged")) {
                $location.path(_path);
            } else {
                $location.path("/login");
                helper.addMsg(
                    "Você não tem acesso a esta página.",
                    "danger",
                    "Faça o login."
                );
            }
        }

        function setPage(path) {
            helper.setRootScope("page", path.substring(1));
        } */
    }
})();
