app.directive('commentsBlock', ['$compile', '$templateRequest', 'CommentsService', function($compile, $templateRequest, CommentsService) {
  return {
    restrict : 'E',
    controller : 'PostCtrl',
    templateUrl : 'templates/comments.html',
    link : function(scope, element, attr) {
      scope.switchComments = false;
      scope.comments = CommentsService.list();
      scope.load = false;
      scope.currentID = 1;

      scope.switchCommentsBlock = function (id) {
        scope.switchComments = !scope.switchComments;

        if (id != undefined) {
          
          if (scope.currentID != id) {
            CommentsService.destroy();
            scope.comments = CommentsService.list();
            scope.currentID == id;
          }

          if (!CommentsService.list().length) {
            CommentsService.load(id, function() {
              scope.load = true;
            }, function() {
              scope.load = false;
            });
          }
        }
      };

    }
  }
}]);