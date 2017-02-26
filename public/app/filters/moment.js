monoture.filter('timeago', [function() {
  return function(time){
    return moment(time).fromNow()
  }
}]);
