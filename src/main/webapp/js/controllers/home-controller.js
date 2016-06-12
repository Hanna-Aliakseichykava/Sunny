'use strict';

appControllers.controller('homeController', [ '$scope', '$http', '$location',
function($scope, $http, $location) {

	$scope.goods = [
		{id: 1, title: 'Good 1', imageUrl: ''},
		{id: 2, title: 'Good 2', imageUrl: ''},
	];

	/*$scope.tabs = [
		{title: 'Tab 1', content: 'Content 1'},
		{title: 'Tab 2', content: 'Content 1'},
		{title: 'Tab 3', content: 'Content 1'}
	];

	$scope.createGame = function() {

		$http({
			method: 'GET',
			url: '/monopoly/createGame'

		}).then(function successCallback(response) {

            $scope.game = response.data;
            $scope.gameLink = document.location.host + document.location.pathname + 
            "game/" + $scope.game.id;
            
            $scope.client = wsHelper.createWS('/monopoly/monopoly');
            $scope.client.connect('guest', 'guest', onConnect);

		}, function errorCallback(response) {
			console.log('Error: ' + response.data);
		});
	};

    var onConnect = function() {

		$scope.client.subscribe("/topic/updateParticipants", function(message) {
			console.log("New Participant:"+ message.body);
            $scope.players.push(JSON.parse(message.body));
			$scope.count++;
			$('#counter').val($scope.count);
		});

		$scope.client.subscribe("/topic/startGame", function(message) {
			console.log("Game is Started:"+ message.body);
			$scope.$apply(function() { $location.path("/monopoly-field"); });
		});

	};
	*/


}]);