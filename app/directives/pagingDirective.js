(function(){
	angular.module("pagingModule",[]).directive('paging', [function () {
		return {
			restrict: 'EA',
			link: function ($scope, $iElement, $iAttrs) {
				$scope.setPage = function(pageNum){
					$scope.currentPage = pageNum;
					console.log("pageNum "+pageNum);
				}
			},
			template: function(iElement,iAttrs){
				return '<ul data-ng-class="pagesUlClass">'+
				'<li data-ng-class="pageLiClass" data-ng-repeat="item in pages">'+
				'<a data-ng-click="setPage(item.num)" class="pageBtnClass">{{item.name}}</a>'+
				'</li></ul>'
			},
			scope: {
				pages: '=',
				currentPage: '='
			}
		};
	}])
})();