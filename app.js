// Module

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Services

weatherApp.service('cityService', function () {
    this.city = "New York, NY";
})



//DIRECTIVES
weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})