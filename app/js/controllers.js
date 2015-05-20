var app = angular.module('demoapp',['leaflet-directive']);

app.controller('DemoController', [ '$scope', 'leafletData', function($scope, leafletData) {
    angular.extend($scope, {
        center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 5
        }
    })
}]);
