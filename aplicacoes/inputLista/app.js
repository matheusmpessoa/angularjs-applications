var app = angular.module('app', []); //novo model

app.controller('mainCtrl', function() {   //cria controller 'nomecontroller'
    var vm = this; //view model

    vm.teams = [    //carregou dentro um array
        {name: 'Palmeiras'},    //objetos
        {name: 'Santos'},
        {name: 'Corinthians'},
        {name: 'São Paulo'},
    ];

    vm.addTeam = function() {
        vm.teams.push({name: vm.inputTeam});
        vm.inputTeam = null;
    }

     vm.removeTeam = function(team) {
        if (confirm("Você realmente deseja deletar este time?")){
            var index = vm.teams.indexOf(team);
            vm.teams.splice(index, 1);
        }
    }
});
