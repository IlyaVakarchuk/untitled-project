app.controller('PostCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showPost = function(item) {
      $scope.$emit('post-item:show', item);
    }
/*
    $scope.addComment = function() {
      console.log('add comment')
    } */
  }]);