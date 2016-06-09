app.service('CommentsService', ['$resource', function($resource) {

  var comments = [], service = {};

  function urlHelper(id) {
    return $resource('/api/comments/' + id);
  }

  function loadComments(id, waitCallback, successCallback) {
    if (waitCallback) {
      waitCallback();
    }

    var request = urlHelper(id);

    request.get().$promise.then(
      function(data) {
        if (data.comments) {
          if (comments.length) {
           // comments = [];
          }
          comments.push(data.comments);
        }

        if (successCallback()) {
          successCallback();
        }
      }, 
      function(data) {
        console.log(data);      
      }
    ); 
  }

  service.load = function(id, waitCallback, successCallback) {
    loadComments(id, waitCallback, successCallback);
  }

  service.list = function() {
    return comments;
  }

  service.destroy = function() {
    comments = [];
  }

  return service;
}]);