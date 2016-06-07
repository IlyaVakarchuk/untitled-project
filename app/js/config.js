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
}]).run( function($rootScope, $location) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
console.log(next)
console.log(next.templateUrl)
      if ( $rootScope.loggedUser == null ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "partials/login.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          console.log('!!!!!!!!!!');
          $location.path( "/" );
        }
      }         
    });
 })
