'use strict';


// Declare app level module which depends on filters, and services
angular.module('tsApp', [
  'ngRoute',
  'tsApp.filters',
  'tsApp.services',
  'tsApp.directives',
  'tsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/options-disabled.html', controller: 'MainController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
