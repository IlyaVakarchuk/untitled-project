app.directive('commentsBlock', ['$compile', '$templateRequest', function($compile, $templateRequest) {
  return {
    restrict : 'E',
    controller : 'PostCtrl',
    templateUrl : 'templates/comments.html',
    link : function(scope, element, attr) {
      scope.switchComments = false;

      scope.switchCommentsBlock = function () {
        scope.switchComments = !scope.switchComments;
      }
    }
  }
}]);