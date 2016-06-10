app.service('PostService', ['$resource', function($resource) {

  var posts = [], service = {};

  service.init = function(categoriesID, waitCallback, successCallback) {
    if (waitCallback) {
      waitCallback();
    }

    var request = $resource('/api/posts/' + categoriesID);

    request.get().$promise.then(
      function(data) {
        if (data.posts) {
          posts = data.posts;
          if (successCallback) {
            successCallback();
          }
        }
      }, 
      function(data) {
        console.log(data);      
      }
    ); 
  };

  service.item = function() {
    return post;
  }

  service.list = function() {
    return posts;
  }

  return service;
}]);