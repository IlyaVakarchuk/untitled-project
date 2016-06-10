app.controller('PostCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showPost = function(item) {
      $scope.$emit('post-item:show', item);
    }

    $scope.showPosts = function (id) {
     $scope.$emit('posts:show', id); 
    }
  }]);