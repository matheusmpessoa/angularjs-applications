var app = angular.module("app", []);

app.controller("mainCtrl", function ($scope) {
    $scope.videos = [
        {
            "url": "https://www.youtube.com/watch?v=fTaOlBWcl48",
            "date": "2017-02-06"
        },
        {
            "url": "https://www.youtube.com/watch?v=YDVAQI-4lto",
            "date": "2017-02-06"
        },
        {
            "url": "https://www.youtube.com/watch?v=SBjQ9tuuTJQ",
            "date": "2017-02-06"
        }
    ];
});

app.filter('trusted', ['$sce', function ($sce) {
    return function (url) {
        var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}]);
