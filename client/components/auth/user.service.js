'use strict';

angular.module('nflPickemApp')
  .factory('User', function ($resource) {
    return $resource('/api/pickemusers/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
