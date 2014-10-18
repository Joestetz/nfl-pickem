'use strict';

angular.module('nflPickemApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      title: 'Home',
      link: '/',
      icon: 'glyphicon glyphicon-home',
      role: 'guest'
    },{
      title: 'Standings',
      link: '/standings',
      icon: 'fa fa-trophy',
      role: 'user'
    },{
      title: 'My Picks',
      link: '/mypicks',
      icon: 'fa fa-hand-o-up',
      role: 'user'
    },{
      title: 'Admin',
      link: '/admin',
      icon: 'glyphicon glyphicon-wrench',
      role: 'admin'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    $scope.isVisible = function(role) {
      return Auth.hasPermission(role);
    };

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });