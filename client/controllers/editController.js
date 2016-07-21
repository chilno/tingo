app.controller('editController', function($scope, $routeParams, friendsFactory){
	friendsFactory.getFriend($routeParams.id, function(data){
		$scope.friend = data;
	})

	$scope.update = function(){
		console.log($scope.friend);
		friendsFactory.update($scope.friend, function(data){
			console.log('back from update db',data);
			$scope.friend = data;
		})
	}
})
