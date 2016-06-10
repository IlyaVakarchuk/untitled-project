app.directive('notifySystem', ['$compile', '$templateRequest', '$interval', function($compile, $templateRequest, $interval) {
  return function(scope, element, attrs) {
    
    var compileTemplate, templateScope, closeNotify;

    function destroy() {
      $interval.cancel(closeNotify);
      compileTemplate.remove();
      compileTemplate = undefined;
    }

    scope.$on('notify:show', function(event, message) {
      if (compileTemplate !== undefined) {
        destroy();
      }

      $templateRequest('templates/notification-block.html').then(function(html){
        scope.notificationMsg = message;
        templateScope = scope.$new(false);
        compileTemplate = $compile(html)(templateScope);
        angular.element(element).append(compileTemplate);

        closeNotify = $interval(destroy, 3000);
      });
    });

    scope.$on('notify:hide', destroy);
  }
}]);