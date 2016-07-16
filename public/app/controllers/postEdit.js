monoture.controller('PostEditController', function($scope, $rootScope, $http, $sce, $location, $routeParams, authProvider){
  var user = authProvider.isLoggedIn();
  $scope.user = user;
  //$scope.post = {};

  $scope.fetchPost = function(id) {
    $http({
      url : '/api/v1/posts/' + id,
      method : 'GET',
      params : {access_token : user.token}
    }).then(function(data){
      $scope.post = data.data.data;
    });
  }

  $scope.$watch('post.body', function(){
    if ($scope.post != undefined) {
      $scope.preview = $sce.trustAsHtml(markdown.toHTML($scope.post.body));
    }
  });

  $scope.fetchPost($routeParams.post);
});
