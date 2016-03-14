angular.module('BelatrixApp.services', [])
  .factory('BelatrixAPI', function($http) {

    var belaAPI = {};

    belaAPI.getDirectors = function() {
      return $http({
        method: 'JSONP', 
        url: ''
      });
    }

    return belaAPI;
  });