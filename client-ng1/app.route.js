angular.module('client').config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: './components/auth/views/auth.html',
      controller: 'loginController'
    })
    .when('/', {
      templateUrl: './components/home/views/home.html',
      controller: 'homeController'
    });
});
