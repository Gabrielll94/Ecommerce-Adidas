var app = angular.module("myApp", []);

app.controller =
  ("myController",
  function ($scope) {
    $scope.message = "Hola mundo!";
  });
