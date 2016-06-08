app.service('PostService', ['$resource', function($resource) {

  var posts = [], service = {};

  function init () {
    var request = $resource('/api/posts/');

    request.get().$promise.then(
      function(data) {
        if (data.posts) {
          posts = data.posts;
        }
      }, 
      function(data) {
        console.log(data);      
      }
    ); 
  }

  init ();

  service.item = function() {
    return post;
  }

  service.list = function() {
    return posts;
  }

  return service;
}]);