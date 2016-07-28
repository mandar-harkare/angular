 var app = angular.module('app', ['ngTouch']);
  var AppController = function($scope) {
    $scope.showActions= false;
    $scope.rightClick = function() {
      //alert('CLICK')
	  $scope.showActions = true;
    };
	$scope.leftClick = function() {
      //alert('CLICK')
	  $scope.showActions = false;
    };
  };