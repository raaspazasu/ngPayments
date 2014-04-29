var myModule = angular.module('myModule', ['ngPayments']);

myModule.controller('myController', ['$scope','$payments', function($scope, $payments) {

    $scope.message = "Credit card validation with ngPayments";

    $scope.verified = function () {
    	return $payments.verified();
    }
}]);
