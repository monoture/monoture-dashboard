monoture.controller('PostEditController', function($scope, $rootScope, $location, $routeParams, postService){

  $scope.publishedOptions = [
    {label : "Yes", value : true},
    {label : "No",  value : false}
  ];

  $scope.fetchPost = function(id) {
    postService.getPost(id).then(function(response){
      $scope.post = response.data.data;
    }).catch(function(err){
      $location.path('/');
    });
  }

  $scope.save = function() {
    postService.savePost($scope.post).then(function(response){
      $location.path('/');
    }).catch(function(err){
      $scope.errors = err;
    });
  }

  $scope.fetchPost($routeParams.post);
});
