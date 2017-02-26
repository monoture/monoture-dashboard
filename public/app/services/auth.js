angular.module('monoture').factory('authProvider', function($sessionStorage, $location) {
  return {
    setUser : function(user){
      $sessionStorage.user = user;
    },

    getUser : function(){
      return ($sessionStorage.user) ? $sessionStorage.user : false;
    },

    logout : function(){
      this.setUser(null)
    },

    checkApiResponse : function(err) {
      if (err.data.meta.errors.message == 'Unauthorized') {
        $location.path('/login');
      } else {
        throw err;
      }
    }
  };
});
