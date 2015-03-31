var player;

function onYouTubeIframeAPIReady() {

	player = new YT.Player('video-player', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	event.target.mute();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		player.playVideo();
	}
}

(function () {
	var app = angular.module('42e', []);

	app.controller('countdownController', ['$scope', function($scope) {

		$scope.timespan = countdown(
			null,
			new Date(2015, 01, 27, 0, 0, 0, 0),
			countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS, 11, 0);
		
		setInterval(function(){
			$scope.$apply(function(){
				$scope.timespan = countdown(
					null,
					new Date(2015, 01, 27, 0, 0, 0, 0),
					countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS, 11, 0); }
			);
		}, 1000);
	}]);
})();