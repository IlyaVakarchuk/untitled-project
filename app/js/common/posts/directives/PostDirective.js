app.directive('postBlock', ['$compile', '$templateRequest', 'PostService', function($compile, $templateRequest, PostService) {
  return {
    restrict : 'E',
    controller : 'PostCtrl',
    templateUrl : 'templates/post.html',
    link : function(scope, element, attr) {

      var compileTemplate, templateScope;

      scope.scrollConfig = {
        autoHideScrollbar: false,
        theme: 'minimal-dark',
        advanced:{
            updateOnContentResize: true
        },
        scrollInertia: 0
      }

      scope.$on('posts:show', function(event, categoriesID) {
        if (compileTemplate !== undefined) {
          destroy();
        }

        PostService.init(categoriesID, function() {

        }, function() {
          scope.length = PostService.list().length;
          scope.posts = PostService.list();

        });
      });

      function destroy() {
        compileTemplate.remove();
      }
    }
  }
}]);