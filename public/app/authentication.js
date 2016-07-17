monoture.run(function ($rootScope, $location, authProvider) {
    $rootScope.$on('$routeChangeStart', function (event) {

    if (!authProvider.getUser()) {
      $location.path('/login');
    }
  });
});
