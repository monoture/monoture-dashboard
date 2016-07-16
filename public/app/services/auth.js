angular.module('monoture').factory('authProvider', function($sessionStorage) {
  return {
    setUser : function(user){
      $sessionStorage.user = user;
    },

    isLoggedIn : function(){
      return ($sessionStorage.user) ? $sessionStorage.user : false;
    }
  };
});
