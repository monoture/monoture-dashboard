monoture.controller('LoginController', function($scope, $rootScope, $http, $location, authProvider){
  $scope.login = function() {

    $http.post('/api/auth', {
      username : $scope.username,
      password : $scope.password
    }).then(function(data){
      $scope.error = false;
      authProvider.setUser(data.data.user);
      $location.path('/');
    }).catch(function(err){
      $scope.error = true;
    });
  }
});
