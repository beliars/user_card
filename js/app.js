var app = angular.module('userCards', []);

app.directive('userCard', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/user_card.html'
	};
});

app.controller('UserController', function() {
	var randomUser = {
		fullName: 'John Smith',
		avatarUrl: 'https://randomuser.me/api/portraits/men/79.jpg',
		birthdate: '29.12.1990',
		sex: 'male',
		address: 'Baker str., b. 11',
		email: 'smith@mail.com'
	};
	this.user = randomUser;
	console.log(this.user);
});

// app.controller('UserController', function($http) {
// 	var promise = 	$http({
// 			method: 'GET',
// 			url: 'https://randomuser.me/api/'
// 		});
// 	console.log(promise);
// 	promise.then(fulfilled, rejected);
// 	function fulfilled(response) {
// 			console.log(response.data);
// 			var data = response.data;
// 			var randomUser = {
// 				fullName: data.results[0].name.first + ' ' + data.results[0].name.last,
// 				sex: data.results[0].gender,
// 				birthdate: '29.12.1990',
// 				address: 'Malinovskogo str., b. 11',
// 				email: data.results[0].email,
// 				avatarUrl: data.results[0].picture.large
// 			}
// 			console.log(this.user);
// 			this.user = randomUser;
// 			console.log(this.user);
// 		}
// 	function rejected(error) {
// 		console.error(error.status); 
// 		console.error(error.statusText); 
// 	}
// });