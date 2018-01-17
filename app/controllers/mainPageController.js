/*
* mainPageController 
*/
mrApp.controller('mainPageCtrl', ['$scope', function ($scope) {
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
					logoPicName:"mardula.jpg",
					logoAlt:"logo mardula",
					header:"Bieg im. Franciszka Marduły",
					distance:32,
					up:2205,
					down:2205,
					priceFrom:70,
					priceTo:120,
					location:"Krościenko nad Dunajcem",
					date:1528002000000,
					category:"Alpejski",
					pointsUTMB:1,
					pointsBUGT:6,
					timeLimit:8,
					playersLimit:300,
					country:"Austria",
					prizes:{
						openM:[700,500,300,200,100],
						openW:[650,450,250,200,100],
						otherCategorys:{
							cat1:{
								header:"Kategoria wiekowa mężczyźni (18-26):",
								prizes:[300,200,100]
							},
							cat2:{
								header:"Kategoria wiekowa kobiety (18-26):",
								prizes:[250,150,100]								
							}
						},
					},
					www:"http://wp.pl",
					signup:"http://wp.pl/poczta"
				},
				{
					logoPicName:"szczawnica.png",
					logoAlt:"logo szczawnica",
					header:"Biegi w Szczawnicy: Wielka Prehyba",
					distance:43,
					up:1735,
					down:1735,
					priceFrom:30,
					priceTo:150,
					location:"Krościenko nad Dunajcem",
					date:1522738800000,
					category:"długi",
					pointsUTMB:0,
					pointsBUGT:0,
					timeLimit:7,
					playersLimit:350,
					country:"Polska",
					prizes:{
						openM:[700,500,300,200,100],
						openW:[650,450,250,200,100],
						otherCategorys:{
							cat1:{
								header:"Kategoria wiekowa mężczyźni (18-26):",
								prizes:[300,200,100]
							},
							cat2:{
								header:"Kategoria wiekowa kobiety (18-26):",
								prizes:[250,150,100]								
							}
						},
					},
					www:"http://www.wp.pl",
					signup:"http://www.wp.pl/poczta"
				}
			];
	
}])