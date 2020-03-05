'use strict';

/* Controllers */

angular.module('tsApp.controllers', []).
  controller('MainController', ['$scope', function($scope) {
    $scope.items = [
      { id: '1', label: 'Option A' },
      { id: '2', label: 'Option B (recommended)' },
      { id: '3', label: 'Option C (Later)', disabled: true }
    ];
    console.log($scope);
  }]);