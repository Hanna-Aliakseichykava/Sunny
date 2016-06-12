appDirectives.directive('tile', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/tile-template.html',
		scope: {
			good: '='
		},
		link: function() {
		}
	};
});