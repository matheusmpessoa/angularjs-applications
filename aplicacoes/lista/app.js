var app = angular.module('app', []); //novo model

app.controller('mainCtrl', function() {   //cria controller 'nomecontroller'
    var vm = this; //view model

    vm.teams = [    //carregou dentro um array
        {name: 'Palmeiras'},    //objetos
        {name: 'Santos'},
        {name: 'Corinthians'},
        {name: 'São Paulo'},
    ];
});
