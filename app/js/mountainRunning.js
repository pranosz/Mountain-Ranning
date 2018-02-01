/*
* Main module - mountainRunning
*/
var mrApp = angular.module("mountainRunning",["ngRoute","mrServices","moment-picker","pagingModule","customFilters"]);
mrApp.config(["$routeProvider","$locationProvider",'momentPickerProvider', function ($routeProvider, $locationProvider, momentPickerProvider) {
        momentPickerProvider.options({
            /* Picker properties */
            format:        'L LTS',
            minView:       'decade',
            maxView:       'day',
            startView:     'day',
            autoclose:     true,
            today:         false,
            keyboard:      false,
            
            /* Extra: Views properties */
            leftArrow:     '&larr;',
            rightArrow:    '&rarr;',
            yearsFormat:   'YYYY',
            monthsFormat:  'MMM',
            daysFormat:    'D',
        });
    
        $routeProvider
            .when("/competitions",{
                templateUrl: "views/competitions.html"
        })
        .otherwise({redirectTo:"/competitions"});
       // $locationProvider.html5Mode(true).hashPrefix('!');
}]);