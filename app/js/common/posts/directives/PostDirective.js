app.directive('postBlock', ['$compile', '$templateRequest', 'PostService', function($compile, $templateRequest, PostService) {
  return {
    restrict : 'E',
    controller : 'PostCtrl',
    templateUrl : 'templates/post.html',
    link : function(scope, element, attr) {
      scope.length = PostService.list().length;
      scope.list = PostService.list();
    }
  }
}]);