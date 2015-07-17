angular.module('client').controller('homeController', function($rootScope, $scope) {
  $scope.title = 'Home Page!';
  $rootScope.core.page.title = $scope.title;


  $scope.text = '';
});
