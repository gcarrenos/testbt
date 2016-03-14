'use strict';

// Declare app level module which depends on views, and components
angular.module('BelatrixApp', [
  'BelatrixApp.services',
  'BelatrixApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/directors", {templateUrl: "views/directors.html", controller: "directorsController"}).
	when("/directors/:id", {templateUrl: "views/director.html", controller: "directorController"}).
	otherwise({redirectTo: '/directors'});
}]);
