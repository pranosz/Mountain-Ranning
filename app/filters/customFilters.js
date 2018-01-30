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
/*
* 	multiSelectFilter
*	@param {array} items / contains objects. Each object represents single competition.
*	@param {array} arr / conatains choosen values {string}.
*	@param {string} propName / name of multiselect list.   
*/
.filter("multiSelectFilter",function(){
	return function(items,arr,propName){
		if(angular.isDefined(arr)){
			var filtered = [];
			angular.forEach(items, function(item){
				//console.log(item[propName].toLowerCase());
	    		var found = arr.indexOf(item[propName].toLowerCase());
	    		if(found !== -1){
	    			filtered.push(item);
	    		}
			})
			return filtered;
		}
	}
})
/*
*	paging
*	@param {array} items / contains objects. Each object represents single competition.
*	@param {number} currentPage / currently selected page.
*	@param {number} pageSize / how many items(competition) are shown per page.
*/
.filter("paging",function($filter){
	return function(items, currentPage, pageSize){
		var filtered = [];
		if(!angular.isArray(items) || currentPage >= pageSize){
			return items;
		}
		var startPage = (currentPage-1)*pageSize;
		filtered = $filter("limitTo")(items.slice(startPage),pageSize);
		return filtered;
	}
})