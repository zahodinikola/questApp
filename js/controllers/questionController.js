'use strict';

questApp.controller('questionController',
    function($scope, $http) {

        $scope.loaded = false;
        
        $scope.load = function() {    
            
            var conf = {
                timeout: 600,
            }
            
            $http.get('question.json', conf)
                .then(function success(response) {
                    $scope.question = response.data.question;
                    $scope.loaded = true;
                    console.log(response.status);
                    console.log(response.headers("content-length"));
                    console.log(response.config);

                }, function error(reason) {
                    console.log("error");
                    console.log(reason.status);
                });
        };
        
        $scope.voteUp = function(answer) {
            answer.rate++;
        };

        $scope.voteDown = function(answer) {
            answer.rate--;
        };
    })