app.directive('backgroundLayer', ['$compile', '$templateRequest', function($compile, $templateRequest) {
  return function(scope, element, attrs) {

    var compileTemplate;

    scope.$on('backgroundLayer:show', function() {
      $templateRequest('templates/background-layer.html').then(function(html){
        templateScope = scope.$new(false);
        compileTemplate = $compile(html)(templateScope);
        angular.element(element).append(compileTemplate)
      });
    });

    scope.$on('backgroundLayer:hide', function (event) {
        compileTemplate.remove();
    });
  }
}]);