monoture.controller('PostCreateController', function($scope, $rootScope, $location, $routeParams, postService){

  $scope.publishedOptions = [
    {label : "Yes", value : true},
    {label : "No",  value : false}
  ];

  $scope.save = function() {
    postService.createPost($scope.post).then(function(response){
      $scope.errors = false;
      $location.path('/');
    }).catch(function(err){
      $scope.errors = err;
    });
  }
});
