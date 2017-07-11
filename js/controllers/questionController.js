'use strict';

questApp.controller('questionController',
    function questionController($scope, $timeout, dataService) {

        var promiseObj = $timeout(function() {
            return dataService.getData();
        },3000);
        promiseObj.then(function(value) {
            $scope.question = value;
        });

        $scope.voteUp = function(answer) {
            answer.rate++;
        };
        $scope.voteDown = function(answer) {
            answer.rate--;
        };
        // $scope.loaded = false;
        
        // $scope.load = function() {    
            
        //     var conf = {
        //         timeout: 600,
        //     }
            
        //     $http.get('question.json', conf)
        //         .then(function success(response) {
        //             $scope.question = response.data.question;
        //             $scope.loaded = true;
        //             console.log(response.status);
        //             console.log(response.headers("content-length"));
        //             console.log(response.config);

        //         }, function error(reason) {
        //             console.log("error");
        //             console.log(reason.status);
        //         });
        // };
        
        // $scope.voteUp = function(answer) {
        //     $http({method: 'get', url: 'setAnswer.php', params: {'id': answer.id, 'up': true}})
        //         .then(function success(response) {
        //             answer.rate++;
        //             console.log(response.data);
        //         })
        // };

        // $scope.voteDown = function(answer) {
        //     $http({method: 'get', url: 'setAnswer.php', params: {'id': answer.id, 'up': false}})
        //         .then(function success(response) {
        //             answer.rate--;
        //             console.log(response.data);
        //         })
        // };
    })