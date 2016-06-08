app.directive('modalWindow', ['$compile', '$templateRequest', function($compile, $templateRequest) {
  return function(scope, element, attrs) {
    
    var compileTemplate, templateScope;

    scope.$on('modal:show', function(event, modalScope, templateUrl) {
      $templateRequest(templateUrl).then(function(html){
        scope.modalContent = modalScope;
        templateScope = scope.$new(false);
        compileTemplate = $compile(html)(templateScope);
        angular.element(element).append(compileTemplate)
      });
    });

    scope.$on('modal:hide', function() {
      compileTemplate.remove();
    });
  }
}]);