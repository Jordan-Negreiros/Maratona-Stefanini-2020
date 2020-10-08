(function () {
    "use strict";
    /**
     *  O use strict define que toda as variaveis tenham que ser declaradas,
     *  para que nenhuma assuma contexto global acidentalmente;
     *  ou seja
     * 
     * NON strict-mode
     * variavel = "string";     // virou global
     * 
     * USE strict-mode
     * var variavel = "string";  // local ou global
     * 
     */

    // PRECISAMOS SELECIONAR O ELEMENTO PARA PODER DIZER ONDE VAI FICAR A APLICAÇÃO
    var div1 = document.getElementById('app1');
    var div2 = document.getElementById('app2');
    
    // APLICAÇÃO 1
    // O primeiro parametro da funcao controller('controlador', **) tem que ser o mesmo que eh referenciado
    // no ng-controller no index.html
    angular
    .module('app1', [])
    .controller('controlador1', function ($scope) {
        // Recebe a variavel do scope que referencia a pagina index.html. Entao tudo q foi criado 
        // la via diretivas(ng-click,bind e outros) vem como um objeto atraves dessa variavel.
        $scope.nome = 'Jordan';
    });

    // APLICAÇÃO 2
    angular
    .module('app2', [])
    .controller('controlador2', function ($scope) {
        $scope.contador = 10;
    });

    /**
     * EXECUTA MANUALMENTE CADA APLICAÇÃO EM SEU ELEMENTO DO HTML
     * POR ISSO NÃO É COLOCADO O NG-APP,
     * PORQUER NO BOOTSTRAP, É PASSADO O ELEMENTO NO QUAL VAI RENDERIZAR A APLICAÇÃO
     * PRIMEIRO PARAMETRO O ELEMENTO E SEGUNDO O MODULO DA APLICAÇÃO
     */

     angular.bootstrap(div1, ['app1']);
     angular.bootstrap(div2, ['app2']);

})();