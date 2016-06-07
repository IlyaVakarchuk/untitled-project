app.controller('LoginCtrl',
  ['$scope', '$resource',
  function ($scope, $resource){
    var req = $resource('/api/auth');

    $scope.login = function() {
      req.get();
    };

    $scope.registartion = function(username, pass01, pass02) {
      if ((username !== undefined) && (pass01 !== undefined) && (pass02 !== undefined) && (pass01 === pass02)) {
        req.save({ username : username, password : pass01 }).$promise.then(function(data) {
          console.log(data);
        }, function(data) {
          console.log(data);
        });
      } else {

      }
    };

    $scope.logout = function() {
      $scope.$emit('modal:show', { item : 'my item'} ,'templates/modal-window.html')
    }
  }])