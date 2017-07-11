'use strict';

questApp.controller('answerController',
	function answerController($scope, $http) {
		
		$scope.response = {};
		
		$scope.save = function(answer, answerForm) {
			
			if(answerForm.$valid) {
				
				$http.post("postAnswer.php", answer)
					.then(function success(response) {
						
						$scope.response = response.data;
						
					});
					
			}
			
		};
		
	})