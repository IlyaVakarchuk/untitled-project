app.controller('LoginCtrl',
  ['$scope', '$resource',
  function ($scope, $resource){
    var req = $resource('/api/auth');

    $scope.switch = 'login';

    $scope.switchPanel = function(panel) {
      $scope.switch = panel;
    }

    $scope.login = function(username, password) {
      console.log(username)
      console.log(password)
      if ((username !== undefined) && (password !== undefined)) {
        /*req.save({ username : username, password : pass01 }).$promise.then(function(data) {
          console.log(data);
        }, function(data) {
          console.log(data);
        }); */

      } else {

      }
    };

    $scope.registartion = function(username, pass01, pass02) {
      console.log(username)
      console.log(pass01)
      console.log(pass02)
      // if ((username !== undefined) && (pass01 !== undefined) && (pass02 !== undefined) && (pass01 === pass02)) {
      //   req.save({ username : username, password : pass01 }).$promise.then(function(data) {
      //     console.log(data);
      //   }, function(data) {
      //     console.log(data);
      //   });
      // } else {

      // }
    };

    $scope.logout = function() {
      $scope.$emit('modal:show', { item : 'my item'} ,'templates/modal-window.html')
    }
  }])