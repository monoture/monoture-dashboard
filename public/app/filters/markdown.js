monoture.filter('markdown', ['$sce', function($sce) {
  return function(text){
    if (text != undefined) {
      return $sce.trustAsHtml(markdown.toHTML(text));
    }
  }
}]);
