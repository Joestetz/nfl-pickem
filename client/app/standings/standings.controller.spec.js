'use strict';

describe('Controller: StandingsCtrl', function () {

  // load the controller's module
  beforeEach(module('nflPickemApp'));

  var StandingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StandingsCtrl = $controller('StandingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
