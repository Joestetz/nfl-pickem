'use strict';

angular.module('nflPickemApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mypicks', {
        templateUrl: 'app/mypicks/mypicks.html',
        controller: 'MypicksCtrl'
      });
  });
