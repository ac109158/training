'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/agent1', {templateUrl: 'partials/agent1.html', controller: 'AppCtrl'});
  $routeProvider.when('/agent2', {templateUrl: 'partials/agent2.html', controller: 'AppCtrl'});


  $routeProvider.otherwise({redirectTo: '/agent1'});
}]);
