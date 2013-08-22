function ActivityViewCtrl($scope, $http) {
	$http.get('data/activity.json').success(function(data) {
    	$scope.activities = data;
  	});  
}

function ActivityEditCtrl($scope, $http) {
	//TBD 
}