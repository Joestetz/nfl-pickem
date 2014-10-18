'use strict';

describe('Controller: MypicksCtrl', function () {

  // load the controller's module
  beforeEach(module('nflPickemApp'));

  var MypicksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MypicksCtrl = $controller('MypicksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
