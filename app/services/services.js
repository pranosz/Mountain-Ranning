(function(){
	angular.module('mrServices', [])
	.factory('competitions', ['$http',function ($http) {
		
		var _getCompetitions = function(callback){

			callback = callback||function(){};

			$http.get('/api.php/competitions')
			.then(function successCallback(response) {
					callback(response);
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		}
	
		return {
			getCompetitions: _getCompetitions
		};
	}])
})();