console.log('in indexController')
app.controller('indexController', function($scope, friendsFactory, $window, $location){
	$scope.friends = [];

	friendsFactory.getFriends(function(data){
		$scope.friends = data;
	})

	$scope.addFriend = function(){
		friendsFactory.addFriend($scope.friend, function(data){
			$scope.friends = data;
			$scope.friend = '';
		})
	}

	$scope.delete = function(friend){
		var deleteFriend = $window.confirm('Are you sure you wanna delete '+friend.name+'?');
		if(deleteFriend){
			friendsFactory.delete(friend, function(data){
				console.log(data);
				$location.path('/');
			})
		}
	}
})