function ActivityViewCtrl($scope, $http) {
	$http.get('data/activity2.json').success(function(data) {
    	$scope.levels = data;
  	});  
}

function ActivityEditCtrl($scope, $http) {
	//TBD 
}