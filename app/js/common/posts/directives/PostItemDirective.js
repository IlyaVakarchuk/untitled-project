app.directive('postItem', ['$compile', '$templateRequest', function($compile, $templateRequest) {
  return function(scope, element, attrs) {

    var compileTemplate;

    scope.$on('post-item:show', function(event, post) {
      if (compileTemplate !== undefined) {
        destroy();
      }

      $templateRequest('templates/post-item.html').then(function(html){
        templateScope = scope.$new(false);
        scope.post = post;
        compileTemplate = $compile(html)(templateScope);
        angular.element(element).append(compileTemplate)
        element.find('.img-container').css('background-image' , 'url(img/post/' + post.img + ')')
      });
    });

    function destroy() {
      compileTemplate.remove();
    }

    scope.$on('post-item:hide', destroy);
  }
}]);