monoture.controller('AuthController', function($http, $location, authProvider){
  var vm = this

  this.login = function() {
    $http.post('/api/auth', {
      username : vm.username,
      password : vm.password
    }).then(function(data){
      vm.error = false;
      authProvider.setUser(data.data.user);
      $location.path('/');
    }).catch(function(err){
      vm.error = true;
    });
  }

  this.logout = function() {
    console.log('Logout')
    authProvider.logout();
    $location.path('/login');
  }
});
