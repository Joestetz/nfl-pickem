'use strict';

angular.module('nflPickemApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/standings', {
        templateUrl: 'app/standings/standings.html',
        controller: 'StandingsCtrl'
      });
  });
