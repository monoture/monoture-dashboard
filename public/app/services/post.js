angular.module('monoture').factory('postService', function($http, $location, authProvider) {

  return {

    getAll : function() {
      return $http({
        url : '/api/v1/posts',
        method : 'GET',
        params : {access_token : authProvider.getUser().token}
      }).catch(authProvider.checkApiResponse);
    },

    // Retrieve a post model
    getPost : function(id) {
      return $http({
        url : '/api/v1/posts/' + id,
        method : 'GET',
        params : {access_token : authProvider.getUser().token}
      }).catch(authProvider.checkApiResponse);
    },

    // Saves a post
    savePost : function(post) {
      return $http({
        url : '/api/v1/posts/' + post._id,
        method : 'PUT',
        params : {access_token : authProvider.getUser().token},
        data : post
      }).catch(authProvider.checkApiResponse);
    },

    // Creates a new post
    createPost : function(post) {
      return $http({
        url : '/api/v1/posts/',
        method : 'POST',
        params : {access_token : authProvider.getUser().token},
        data : post
      }).catch(authProvider.checkApiResponse);
    },

    // Deletes a post
    deletePost : function(id) {
      return $http({
        url : '/api/v1/posts/' + id,
        method : 'DELETE',
        params : {access_token : authProvider.getUser().token}
      }).catch(authProvider.checkApiResponse);
    },

    publishPost : function(post) {
      if (post.published) {
        post.published = false;
      } else {
        post.published = true;
      }

      return $http({
        url : '/api/v1/posts/' + post._id,
        method : 'PUT',
        params : {access_token : authProvider.getUser().token},
        data : post
      }).catch(authProvider.checkApiResponse);
    }
  };
});
