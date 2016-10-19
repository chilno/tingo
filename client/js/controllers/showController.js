app.controller('showController',function($scope, $routeParams, friendsFactory){
	friendsFactory.getFriend($routeParams.id, function(data){
		$scope.friend = data;
	})
})