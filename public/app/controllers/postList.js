monoture.controller('PostListController', function($scope, $rootScope, $location, postService){

  $scope.loadPosts = function() {
    postService.getAll().then(function(response){
      $scope.posts = response.data.data;

      // If we haven't got any posts, go to the new post page
      if ($scope.posts.length == 0) {
        $location.path('/new');
        return;
      }

      // Load the first post if there's no preview
      if ($scope.post == undefined) {
        $scope.fetchPost($scope.posts[0]._id);
      }
    }).catch(function(err){
      $scope.errors = err;
    });
  };

  $scope.fetchPost = function(id) {
    postService.getPost(id).then(function(response){
      $scope.post = response.data.data;
      $scope.selected = $scope.post._id;
    }).catch(function(err){
      $scope.errors = err;
    });
  }

  $scope.editPost = function() {
    $location.path('/edit/' + $scope.post._id);
  }

  $scope.publishPost = function() {
    postService.publishPost($scope.post).then(function(response){
      $scope.loadPosts();
    }).catch(function(err){
      $scope.errors = err;
    });
  }

  $scope.deletePost = function() {
    postService.deletePost($scope.post._id).then(function(data){
      $scope.loadPosts();

      // Load the first available post
      $scope.fetchPost($scope.posts[0]._id);
    }).catch(function(err){
      $scope.errors = err;
    });
  }

  // Load the posts
  $scope.loadPosts();
});
