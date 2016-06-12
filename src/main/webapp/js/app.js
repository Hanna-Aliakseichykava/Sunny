'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers',
'ui.router']).
	config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "partials/home.html",
		controller: 'homeController'
	})
	.state('other', {
		url: "/other",
		templateUrl: "partials/other.html"
	});

}]);

var appServices = angular.module('myApp.services', []);
var appControllers = angular.module('myApp.controllers', []);
var appFilters = angular.module('myApp.filters', []);
var appDirectives = angular.module('myApp.directives', []);
