/* 
*	Range filters: 
*					[min.date|max.date]
*					[min.price|max.price]
*					[min.distance|max.distance]
*					[min.altitude|max.altitude]
*					[min.points|max.points]
*
*/
angular.module("customFilters",[])
.filter("rangeFilter",function($log){
	return function(items,min,max){

		var filters = {
			"price":{minPrice:0,maxPrice:99999},
			"distance":{minDistance:0,maxDistance:99999},
			"altitude":{minAltitude:0,maxAltitude:99999},
			"pointsUTMB":{minPointsUTMB:0,maxPointsUTMB:99999},	
			"pointsBUGT":{minPointsBUGT:0,maxPointsBUGT:99999}				
		};
		var filtered = [];

		angular.forEach(filters, function(obj, name){
         	if(min[name]){
         		obj[Object.keys(obj)[0]] = min[name];
         	};
         	if(max[name]){
         		obj[Object.keys(obj)[1]] = max[name];
         	}
		});
		var dateMin = new Date(min.date);
		var dateMax = new Date(max.date);
		angular.forEach(items, function(item){
			var dateItem = new Date(item.date);
			if((Number(item.distance)<=filters.distance.maxDistance 
				&& Number(item.distance)>=filters.distance.minDistance)
				&& (Number(item.priceMin)<=filters.price.maxPrice 
				&& Number(item.priceMin)>=filters.price.minPrice)
				&& (Number(item.up)<=filters.altitude.maxAltitude 
				&& Number(item.up)>=filters.altitude.minAltitude)
				&& (Number(item.pointsUTMB)<=filters.pointsUTMB.maxPointsUTMB 
				&& Number(item.pointsUTMB)>=filters.pointsUTMB.minPointsUTMB)
				&& (Number(item.pointsBUGT)<=filters.pointsBUGT.maxPointsBUGT 
				&& Number(item.pointsBUGT)>=filters.pointsBUGT.minPointsBUGT)
				&& (dateItem.getTime() >= dateMin.getTime() 
				&& dateItem.getTime() <= dateMax.getTime())
				){
				filtered.push(item);
			};
		});
		return filtered;
	}
})
.filter("multiSelectFilter",function(){
	return function(items,arr,propName){
		if(angular.isDefined(arr)){
			console.log(propName);
			var filtered = [];
			angular.forEach(items, function(item){
				console.log(item[propName].toLowerCase());
	    		var found = arr.indexOf(item[propName].toLowerCase());
	    		if(found !== -1){
	    			filtered.push(item);
	    		}
			})
			return filtered;
		}
	}
})