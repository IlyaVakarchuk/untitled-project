app.controller('LoginCtrl',
  ['$scope', '$rootScope', '$resource',
  function ($scope, $rootScope, $resource){
    var req = $resource('/api/login');

    $scope.switch = 'login';

    $scope.switchPanel = function(panel) {
      $scope.switch = panel;
    }

    $scope.login = function(username, password) {
      if ((username !== undefined) && (password !== undefined)) {
        req.save({ username : username, password : password }).$promise.then(function(data) {
          if (data.auth) {
            $rootScope.authUser = username;
          }
        }, function(data) {
          console.log(data);
        });

      } else {

      }
    };

    $scope.registartion = function(username, pass01, pass02) {

    };

    $scope.logout = function() {
     
    }
  }])