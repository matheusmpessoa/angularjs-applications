var app = angular.module('app', []);

app.controller('ListaOperacaoCtrl', ['$scope', function ($scope) {
    $scope.operacoes = [

    ];

    $scope.adicionaOperacao = function () {
        $scope.operacoes.push({
            tipo: $scope.operacao.tipo,
            valor: $scope.operacao.valor,
        });
        $scope.operacao.tipo = $scope.operacao.valor = '';

        $scope.getSaldo();
    };

    $scope.del = function (valor) {
        var result = confirm('Tem certeza que deseja excluir?');
        if (result === true) {
            var index = getSelectedIndex(valor);
            $scope.operacoes.splice(index, 1);
        }

        $scope.getSaldo();
    };

    $scope.getSaldo = function () {
        var total = 0;
        $scope.operacoes.forEach(function (el, i) {
            if (el.tipo == 'Deposito') {
                total += Math.abs(el.valor);
            } else if (el.tipo == 'Saque') {
                total += (-1) * Math.abs(el.valor);
            }
        });

        $scope.saldo = total;
    };

    function getSelectedIndex(valor) {
        for (var i = 0; i < $scope.operacoes.length; i++)
            if ($scope.operacoes[i].valor == valor) {
                return i;
            }
        return -1;
    }
}]);
