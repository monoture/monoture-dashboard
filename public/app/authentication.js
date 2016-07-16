monoture.run(function ($rootScope, $location, authProvider) {
    $rootScope.$on('$routeChangeStart', function (event) {

    if (!authProvider.isLoggedIn()) {
      $location.path('/login');
    }
  });
});
