// sample course outline: https://scs.senecac.on.ca/course/hwd101
// json linter: http://jsonlint.com/

function ActivityViewCtrl($scope, $http) {
	$http.get('data/activity.json').success(function(data) {
    	$scope.activities = data;
  	});  
}

function ActivityEditCtrl($scope, $http) {
	//TBD 
}