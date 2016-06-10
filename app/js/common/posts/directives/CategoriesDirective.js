app.directive('categoriesList', ['CategoriesService', function(CategoriesService) {
  return {
    restrict : 'E',
    templateUrl : 'templates/categories-list.html',
    link : function(scope, element, attr) {
      scope.length = CategoriesService.list().length;
      scope.categories = CategoriesService.list();
    }
  }
}]);