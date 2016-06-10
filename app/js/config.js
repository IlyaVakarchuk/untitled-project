app.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl : 'templates/greeting.html',
      controller : 'MainCtrl'
    })
    .when('/auth',
      {
        templateUrl : 'templates/auth.html',
        controller : 'LoginCtrl',
        secure: true,
      })
    .when('/home', 
      {
        templateUrl : 'templates/home.html',
        secure: true
      })
    .otherwise({redirectTo: '/'});;

    $locationProvider.html5Mode({enabled : true, requireBase : false});
}]).run(function($rootScope, $location, $resource) {

  var request = $resource('/api/auth-info');

  $rootScope.$on('auth', function(){
    $location.path( "/home" );
  });

  $rootScope.$on('logout', function(){
    $location.path( "/" );
  })

  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    if ($rootScope.authUser == null ) {
      request.get().$promise.then(
        function(data) {
          if (data.auth) {
             $rootScope.authUser = data.user;
             if ( next.templateUrl == 'templates/greeting.html') {
              $location.path( "/home" );
             }
          } else {
            if ( next.templateUrl != "partials/login.html" ) {
              $location.path( "/" );
            }
          }
        }, 
        function(data) {      
        }
      ); 
    };
  });
});
