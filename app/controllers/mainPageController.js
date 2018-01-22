/*
* mainPageController 
*/
mrApp.controller('mainPageCtrl', ['$scope', function ($scope) {

	/*
	$scope.selectCountry = ["poland","austria","croatia","słowacja"];
    $scope.selectCategory = ["alpejski","anglosaski","długi","ultra"];
    */
    /*
    * Hide / show additional filters
    */
	$scope.toggle = false;
    $scope.showFilters = function() {
        $scope.toggle = !$scope.toggle;  
    };
    /*
    * Default date in the date range fields
    */
	$scope.min = {date: moment().locale("en")};
	$scope.max = {date: moment().locale("en").add(12, 'month')};
	/*
   * Multi select
   */
    $('#country').multiselect({
        selectAll: true,
        minHeight: null,
        showCheckbox: true,
        texts    : {
            placeholder: 'Select Country',
            search     : 'Search States'
        }
    });
    $('#category').multiselect({
        selectAll: true,
        minHeight: null,
        showCheckbox: true,
        texts    : {
            placeholder: 'Select Category',
            search     : 'Search States'
        }
    });

    /*
    * Temp data
    */
	$scope.items = [
				{
					header:"Bieg im. Franciszka Marduły",
					distance:32,
					up:2205,
					down:2205,
					priceMin:70,
					priceMax:120,
					location:"Krościenko nad Dunajcem",
					date:1528002000000,
					category:"Alpejski",
					pointsUTMB:1,
					pointsBUGT:6,
					timeLimit:8,
					playersLimit:300,
					country:"Austria",
					www:"http://wp.pl",
					signup:"http://wp.pl/poczta"
				},
				{
					header:"Biegi w Szczawnicy: Wielka Prehyba",
					distance:43,
					up:1735,
					down:1735,
					priceMin:30,
					priceMax:150,
					location:"Krościenko nad Dunajcem",
					date:1522738800000,
					category:"długi",
					pointsUTMB:0,
					pointsBUGT:0,
					timeLimit:7,
					playersLimit:350,
					country:"Polska",
					www:"http://www.wp.pl",
					signup:"http://www.wp.pl/poczta"
				}
			];
	
}])