'use strict';

angular.module('nflPickemApp')
  .controller('StandingsCtrl', function ($scope) {
    $scope.weeks = [];
    $scope.weeks.length = 17;
    
    $scope.predicate = 'place';
    $scope.reverse = false;
    $scope.sortBy = function (predicate) {
      if ($scope.predicate === predicate) {
        $scope.reverse = !$scope.reverse;
        return;
      }
      
      $scope.predicate = predicate;
      $scope.reverse = false;
    }
    
    //todo: use a service
    $scope.players = [{
      name: 'Bob',
      userId: '1',
      scores: [5,3,5,2,6,1,2],
      place: 1
    },{
      name: 'Jim',
      userId: '1',
      scores: [7,4,6,3,2,6,3],
      place: 2
    },{
      name: 'Sara',
      userId: '1',
      scores: [5,4,5,3,4,5,5],
      place: 3
    },{
      name: 'Jen',
      userId: '1',
      scores: [7,5,8,5,4,5,4],
      place: 4
    },{
      name: 'Glen',
      userId: '1',
      scores: [9,6,7,8,10,5,6],
      place: 5
    }];
    
    $scope.getTotalScore = function (player) {
      var total = 0;
      for(var i = 0; i < player.scores.length; i++) {
        total += player.scores[i];
      }
      
      return total;
    };
    
    $scope.formatScore = function (score) {
      return score ? score : '-';
    }
  });
