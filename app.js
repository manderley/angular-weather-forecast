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

weatherForecastApp.controller('homeController', ['$scope', function($scope) {

}]);

weatherForecastApp.controller('forecastController', ['$scope', function($scope) {

}]);