monoture.controller('PostCreateController', function($scope, $rootScope, $sce, $location, $routeParams, postService){

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

  $scope.$watch('post.body', function(){
    if ($scope.post != undefined) {
      $scope.preview = $sce.trustAsHtml(markdown.toHTML($scope.post.body));
    }
  });
});
