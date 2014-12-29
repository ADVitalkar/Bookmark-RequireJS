define(['login/loginService'],function(bookmark){
	bookmark.controller('LoginController', ['$scope','LoginService', function($scope, LoginService) {    
	    $scope.AuthLogin = function(){
		    LoginService.setCredentials($scope.userName, $scope.password);
		    LoginService.getCredentials();
		}
	}]);
});