'use strict';

var monoture = angular.module('monoture', ['ngRoute', 'ngStorage']);

monoture.config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl : 'app/views/posts.html',
      controller : 'PostListController'
    }).
    when('/login', {
      templateUrl : 'app/views/login.html',
      controller : 'LoginController'
    }).
    when('/edit/:post', {
      templateUrl : 'app/views/edit.html',
      controller : 'PostEditController'
    }).
    when('/new', {
      templateUrl : 'app/views/edit.html',
      controller : 'PostCreateController'      
    }).
    otherwise({
        redirectTo: '/login'
    });
});
