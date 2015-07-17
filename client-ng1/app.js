angular.module('client',
  [
    'ngResource',
    'ngRoute'
  ]
)
  .run(function($rootScope) {
    // core index object
    $rootScope.core = {};
      $rootScope.core.running = true;
      $rootScope.core.page = {};
        $rootScope.core.page.title = 'client - 1.0.0';

    $rootScope.auth = {
      user: {
        username: '',
        session: ''
      },

    };
  });
