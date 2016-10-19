console.log('in factory');
app.factory('friendsFactory', function($http){
	var factory = {}
	var friends = [];


	factory.getFriends = function(cb){
		$http.get('/friends').then(function(data){
			friends = data.data;
			cb(friends);
		})
	}

	factory.getFriend = function(friend_id, cb){
		$http.get('/friends/'+friend_id).then(function(data){
			cb(data.data);
		})
	}

	factory.addFriend = function(friend, cb){
		$http.post('/friends', friend).then(function(data){
			friends.push(data.data);
			cb(friends);
		})

	}

	factory.update = function(friend, cb){
		console.log('in factory update',friend);
		$http.put('/friends/'+friend._id, friend).then(function(data){
			console.log('in factory update return from db', data.data);
			cb(data.data);
		})
	}

	factory.delete = function(friend, cb){
		$http.delete('/friends/'+friend._id).then(function(data){
			console.log(data.data);
			cb(data.data);
		})
	}
	return factory;
})