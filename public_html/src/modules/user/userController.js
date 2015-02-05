/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			}
			this.save = function () {
                                var nacio = String($scope.user.calendario);
                                nacio = nacio.substring(4,15);
				document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El usuario " + $scope.user.firstName + " " + $scope.user.lastName + " nació en " + nacio + "</div>";;
			};
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();

