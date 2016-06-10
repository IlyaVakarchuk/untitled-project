app.service('CategoriesService', ['$resource', function($resource) {

  var categoriesList = [], service = {};

  function init () {
    var request = $resource('/api/categories/');

    request.get().$promise.then(
      function(data) {
        if (data.categoriesList) {
          categoriesList = data.categoriesList;
        }
      }, 
      function(data) {
        console.log(data);      
      }
    ); 
  }

  init();

  service.item = function() {
    return categoriesList;
  }

  service.list = function() {
    return categoriesList;
  }

  return service;
}]);