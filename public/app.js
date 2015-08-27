var app = angular.module("postsWorkshop", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/posts.html',
      controller: 'ApplicationController'
    })
    // $locationProvider.html5Mode(true);
    // .otherwise({redirectTo: '/'})
})


app.controller('ApplicationController', ['$scope', '$http', function ($scope, $http) {
  $scope.testing = 'heyhey'
  $scope.getPosts = function () {
    $http.get('/api/posts')
    .then(function (response) {
      console.log(response);
      $scope.posts = response.data
    })
  }
}])
