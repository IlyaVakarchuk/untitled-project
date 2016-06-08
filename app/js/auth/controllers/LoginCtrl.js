app.controller('LoginCtrl',
  ['$scope', '$rootScope', '$resource',
  function ($scope, $rootScope, $resource){

    function urlHelper(url) {
      return $resource(url);
    }

    $scope.$emit('backgroundLayer:show');

    $scope.switch = 'login';

    $scope.switchPanel = function(panel) {
      $scope.switch = panel;
    }

    $scope.login = function(username, password) {
      var request = urlHelper('/api/login');

      if ((username !== undefined) && (password !== undefined)) {
        request.save({ username : username, password : password }).$promise.then(function(data) {
          if (data.auth) {
            $rootScope.authUser = username;
            $scope.$emit('backgroundLayer:hide');
          }
        }, function(data) {
          console.log(data);
        });

      } else {

      }
    };

    $scope.registartion = function(username, pass01, pass02) {
      var request = urlHelper('/api/registartion');

      if ((username !== undefined) && (pass01 !== undefined) && (pass02 !== undefined) && (pass01 == pass02)) {
        request.save({ username : username, password : pass01 }).$promise.then(function(data) {
          if (data.auth) {
            $rootScope.authUser = username;
          }
        }, function(data) {
          console.log(data);
        });

      } else {

      }
    };

    $scope.logout = function() {
      var request = urlHelper('/api/logout');

      request.delete().$promise.then(function(data) {
          if (!auth) {
            $rootScope.authUser = null;
          }
        }, function(data) {
        
        });
    }
  }])