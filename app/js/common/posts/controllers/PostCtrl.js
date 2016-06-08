app.controller('PostCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showPost = function(item) {
      $scope.$emit('post-item:show', item);
    }
  }]);