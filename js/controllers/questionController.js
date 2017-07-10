'use strict';

questApp.controller('questionController',
    function($scope, $http) {

        $http({method: 'get', url: 'question.json'})
            .then(function success(response) {
                $scope.question = response.data.question;
            });
        
        $scope.voteUp = function(answer) {
            answer.rate++;
        };

        $scope.voteDown = function(answer) {
            answer.rate--;
        };
    })