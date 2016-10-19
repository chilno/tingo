var app = angular.module('friendsApp',["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/index', {
		templateUrl: '/views/index.html',
		controller:'indexController'
	})
	.when('/edit/:id',{
		templateUrl: '/views/edit.html',
		controller: 'editController'
	})
	.when('/show/:id', {
		templateUrl: '/views/show.html',
		controller: 'showController'
	})
	.when('/new', {
		templateUrl: '/views/new.html',
		controller: 'newController'
	})
	.otherwise({
		redirectTo: '/index'
	})
})

