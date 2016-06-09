app.directive('postItem', ['$compile', '$templateRequest', function($compile, $templateRequest) {
  return function(scope, element, attrs) {

    var compileTemplate;

    scope.switchComments = false;

    scope.switchCommentsBlock = function () {
      scope.switchComments = !scope.switchComments;
    }

    scope.$on('post-item:show', function(event, post) {
      if (compileTemplate !== undefined) {
        clear();
      }

      $templateRequest('templates/post-item.html').then(function(html){
        templateScope = scope.$new(false);
        scope.post = post;
        compileTemplate = $compile(html)(templateScope);
        angular.element(element).append(compileTemplate)
        element.find('.img-container').css('background-image' , 'url(img/post/' + post.img + ')')
      });
    });

    function clear() {
      compileTemplate.remove();
    }

    scope.$on('post-item:hide', clear);
  }
}]);