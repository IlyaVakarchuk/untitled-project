app.directive('modalWindow', ['$compile', '$templateRequest', function($compile, $templateRequest) {
  return function(scope, element, attrs) {
    
    var template, templateScope;

    scope.$on('modal:show', function(event, modalScope, templateUrl) {
      $templateRequest(templateUrl).then(function(html){
        scope.modalContent = modalScope;
        templateScope = scope.$new(false);
        angular.element(element).append($compile(html)(templateScope))
      });
    });
  }
}]);