'use strict';

console.log("OUTSIDE: alloy Controller");

app.controller('alloyController', function ($scope, $http, alloyService) {

    console.log("INSIDE: alloy Controller");

    $scope.refresh = function () {

        alloyService.getTurner(function (response) {

            console.log("_________________________________");
            console.log("getTurner response.DATA: ");
            console.info(response);
            console.log("_________________________________");
            $scope.todo = response;

        });

    }

    $scope.refresh();

});
