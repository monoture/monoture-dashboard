monoture.controller('PostListController', function($scope, $rootScope, $http, $sce, $location, authProvider){
  var user = authProvider.isLoggedIn();
  $scope.user = user;
  $scope.post = {};

  $scope.loadPosts = function() {
    $http({
      url : '/api/v1/posts',
      method : 'GET',
      params : {access_token : user.token}
    }).then(function(data){
      console.log(data);
      $scope.posts = data.data.data;

      // Load the first post if there's no preview
      if ($scope.preview == undefined) {
        $scope.fetchPost($scope.posts[0]._id);
      }
    });
  };

  $scope.fetchPost = function(id) {
    $http({
      url : '/api/v1/posts/' + id,
      method : 'GET',
      params : {access_token : user.token}
    }).then(function(data){
      console.log(data);
      $scope.post = data.data.data;
      $scope.preview = $sce.trustAsHtml(markdown.toHTML(data.data.data.body));
    });
  }

  $scope.editPost = function() {
    $location.path('/edit/' + $scope.post._id);
  }

  $scope.publishPost = function() {

  }

  $scope.deletePost = function() {
    $http({
      url : '/api/v1/posts/' + $scope.post._id,
      method : 'DELETE',
      params : {access_token : user.token}
    }).then(function(data){
      console.log(data);
      $scope.loadPosts();
    });
  }

  // Load the posts
  $scope.loadPosts();
});
