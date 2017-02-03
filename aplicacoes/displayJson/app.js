var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.data = {
        "musicas": {
            "rock": "Foo Fighters",
            "reggae": "SOJA",
            "funk": null,
            "rap": "Eminem",
            "metal": "Metallica"
        },
        "filmes": [
            {
                "genreType": "Terror",
                "name": "Invocação do mal"
            },
            {
                "genreType": "Ficção",
                "name": "Star Wars"
            },
            {
                "genreType": "Ação",
                "name": "Duro de matar"
            }
		]
    };

});
