app.controller('MainCtrl',
  ['$scope', '$resource', '$interval',
  function ($scope, $resource, $interval) {

    var helloBase = ['Hello', 'Привет', 'Salut', 'Hallo', 'Ciao', '你好', 
    'Hej', '안녕', 'مرحبا', 'Selam'];
    var i = 0;

    $scope.hello = 'Hello';

    $interval(function() {
      $scope.hello = helloBase[i];
      i++;
      if (i >= helloBase.length) { 
        i = 0;
      }
    }, 1000);



    $scope.auth = function() {
      $scope.$emit('modal:show', { item : 'my item'} ,'templates/modals/auth-form.html')
    };
  }])