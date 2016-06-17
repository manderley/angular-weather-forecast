// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5b0f7f6694e0b74ef10365dcb9dd4f3b

var weatherForecastApp = angular.module('weatherForecastApp', ['ngRoute', 'ngResource']);

weatherForecastApp.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	})

	.when('/forecast', {
		templateUrl: 'templates/forecast.html',
		controller: 'forecastController'
	})

});


weatherForecastApp.service('cityService', function() {

    this.city = 'Madrid';

});

weatherForecastApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

}]);

weatherForecastApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {

    $scope.city = cityService.city;

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5b0f7f6694e0b74ef10365dcb9dd4f3b", { callback: "JSON_CALLBACK" }, { get: { method: 'JSONP' }});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });

}]);