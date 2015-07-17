angular.module('client').controller('loginController', function($rootScope, $scope) {
  $scope.title = 'Log In';
  $rootScope.core.page.title = $scope.title;

  $scope.form = {
    username: '',
    password: ''
  };

  $scope.auth = function() {
    console.log('Username: ' + $scope.form.username);
    console.log('Password: ' + $scope.form.password);
  };
});
