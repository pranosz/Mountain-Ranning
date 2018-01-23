/*
* Main module - mountainRunning
*/
var mrApp = angular.module('mountainRunning', ["moment-picker","customFilters"]);
mrApp.config(['momentPickerProvider', function (momentPickerProvider) {
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
    
       // $locationProvider.html5Mode(true).hashPrefix('!');
}]);